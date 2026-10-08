// Run with a local server at localhost:8076 and Playwright available in NODE_PATH.
const {chromium}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=process.env.QA_OUTPUT||path.join(root,'../qa');
const libs=process.env.QA_LIBS||path.join(root,'../references');
const url=process.env.APP_URL||'http://localhost:8076/';
(async()=>{
 fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true,args:['--no-sandbox'],...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
 const page=await browser.newPage({viewport:{width:1440,height:1050}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept());
 for(const name of ['xlsx.full.min.js','jspdf.umd.min.js'])if(fs.existsSync(path.join(libs,name)))await page.route('**/'+name,r=>r.fulfill({path:path.join(libs,name),contentType:'text/javascript'}));
 await page.goto(url+'?lang=sv');await page.waitForFunction(()=>typeof summary==='function');
 assert.deepEqual(errors,[],'boot');assert.equal(await page.locator('#nextCycle').count(),0);
 // Import the exact Moment-timer source when available, then verify the canonical format separately.
 const real=process.env.STEP_FILE;
 if(real){await page.locator('#positionsFile').setInputFiles(real);await page.waitForFunction(()=>project.positions.length>0);assert(await page.evaluate(()=>project.positions.every(p=>p.x===null&&p.y===null)));}
 const spreadsheet=await page.evaluate(()=>{const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([['Steg','Moment'],[2,'Kontroll'],[1,'Material']]),'Tabell1');return Array.from(new Uint8Array(XLSX.write(wb,{type:'array',bookType:'xlsx'})))});
 await page.locator('#positionsFile').setInputFiles({name:'Gemensam.xlsx',mimeType:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',buffer:Buffer.from(spreadsheet)});
 await page.waitForFunction(()=>project.positions.length===2);
 assert.deepEqual(await page.evaluate(()=>project.positions.map(p=>[p.name,p.x,p.y])),[['Material',null,null],['Kontroll',null,null]]);
 assert.equal(await page.locator('#board .node').count(),0);
 await page.locator('[data-name]').first().fill('Inmatning');
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('dometic-movements')).positions[0].name),'Inmatning');
 await page.locator('#workstation').fill('Limhjul 1');await page.locator('#observer').fill('Testobservatör');
 await page.locator('#start').click();assert.equal(await page.evaluate(()=>project.session.status),'idle');
 // Real mouse drag from tray to SVG, then move directly without selecting a move mode.
 await page.evaluate(()=>scrollTo(0,0));const board=await page.locator('#board').boundingBox();
 const handle=await page.locator('[data-drag]').first().boundingBox();
 await page.mouse.move(handle.x+handle.width/2,handle.y+handle.height/2);await page.mouse.down();await page.mouse.move(board.x+board.width*.2,board.y+board.height*.35,{steps:12});await page.mouse.up();
 assert(await page.evaluate(()=>placed(project.positions[0])),'tray drag');
 const circle=await page.locator('#board .node circle').first().boundingBox();
 await page.mouse.move(circle.x+circle.width/2,circle.y+circle.height/2);await page.mouse.down();await page.mouse.move(board.x+board.width*.3,board.y+board.height*.4,{steps:10});await page.mouse.up();
 assert(Math.abs(await page.evaluate(()=>project.positions[0].x)-.3)<.02,'direct drag');
 await page.locator('[data-place]').nth(1).click();await page.locator('#board').click({position:{x:board.width*.7,y:board.height*.6}});
 assert.equal(await page.locator('#board .node').count(),2);
 await page.waitForTimeout(400);await page.locator('#board .node circle').first().dblclick();
 assert.equal(await page.locator('[data-name]').first().evaluate(e=>e===document.activeElement),true,'double-click rename');
 await page.keyboard.insertText('Materiallager');await page.keyboard.press('Enter');
 await page.locator('#addToList').click();await page.locator('[data-name]').last().fill('Extra');await page.locator('[data-delete]').last().click();
 assert.equal(await page.evaluate(()=>project.positions.length),2);
 // Same Excel file round-trips into the workstep parser's expected header/worksheet shape.
 let downloaded=page.waitForEvent('download');await page.locator('#savePositions').click();let file=await downloaded;await file.saveAs(path.join(out,'positions.xlsx'));
 const exported=await page.evaluate(()=>{let found;window._oldDownload=download;download=(b,m,n)=>{found=Array.from(new Uint8Array(b))};$('savePositions').click();download=window._oldDownload;return found});
 const back=await page.evaluate(data=>{const wb=XLSX.read(new Uint8Array(data),{type:'array'});return XLSX.utils.sheet_to_json(wb.Sheets.Tabell1,{header:1})},exported);
 assert.deepEqual(back,[['Steg','Moment'],[1,'Materiallager'],[2,'Kontroll']]);
 await page.locator('#applyScale').click();await page.locator('#targetMinutes').fill('30');
 await page.screenshot({path:path.join(out,'desktop-setup.png'),fullPage:true});
 // Deterministic wall-clock timer; movement time excludes work and pause time.
 await page.evaluate(()=>{window.testNow=Date.now();Date.now=()=>window.testNow});
 await page.locator('#start').click();await page.locator('[data-station]').first().click();
 await page.evaluate(()=>testNow+=10000);await page.locator('#walk').click();await page.evaluate(()=>testNow+=5000);
 await page.locator('#pause').click();await page.evaluate(()=>testNow+=60000);assert.equal(await page.evaluate(()=>elapsed()),15000);
 await page.locator('#start').click();await page.evaluate(()=>testNow+=3000);await page.locator('[data-station]').nth(1).click();
 assert.equal(await page.evaluate(()=>legs()[0].b.walkMs),8000);
 assert.equal(await page.locator('[data-name]').count(),0,'layout locked while observing');
 const positionBefore=await page.evaluate(()=>project.positions[0].x);
 await page.locator('#board').dispatchEvent('pointerdown',{clientX:40,clientY:40,pointerId:9,button:0});
 assert.equal(await page.evaluate(()=>project.positions[0].x),positionBefore);
 await page.evaluate(()=>testNow+=2000);await page.locator('[data-station]').first().click();assert.equal(await page.evaluate(()=>summary().walkKind),'mixed');
 await page.locator('#stop').click();assert.equal(await page.evaluate(()=>elapsed()),20000);assert.equal(await page.evaluate(()=>project.observedCycles),null);
 assert.equal(await page.locator('#resultStats .stat').count(),6);
 await page.locator('#observedCycles').fill('20');assert.equal(await page.locator('#resultStats .stat').count(),10);
 await page.locator('[data-value="actual"]').first().fill('5,5');await page.locator('[data-value="actual"]').first().press('Tab');
 await page.locator('[data-value="steps"]').first().fill('10');await page.locator('[data-value="steps"]').first().press('Tab');
 assert.equal(await page.evaluate(()=>legs()[0].distance),5.5);assert.equal(await page.evaluate(()=>legs()[0].steps),10);
 await page.locator('[data-value="walkMs"]').nth(1).fill('4');await page.locator('[data-value="walkMs"]').nth(1).press('Tab');assert.equal(await page.evaluate(()=>summary().walkTime),12000);
 assert.equal(await page.evaluate(()=>summary().share),60);
 await page.screenshot({path:path.join(out,'desktop-results.png'),fullPage:true});
 // Language coverage, PDF generation, CSV and JSON preserve results.
 for(const l of ['sv','en','de']){
  await page.evaluate(l=>chooseLanguage(l),l);
  assert(await page.evaluate(()=>Object.keys(translations.en).every(k=>Object.hasOwn(translations[lang],k))));
  assert.equal(await page.locator('html').getAttribute('lang'),l);
  downloaded=page.waitForEvent('download');await page.locator('#print').click();file=await downloaded;await file.saveAs(path.join(out,'report-'+l+'.pdf'));assert((await fs.promises.stat(path.join(out,'report-'+l+'.pdf'))).size>10000);
 }
 downloaded=page.waitForEvent('download');await page.locator('#csv').click();file=await downloaded;await file.saveAs(path.join(out,'result.csv'));
 downloaded=page.waitForEvent('download');await page.locator('#saveProject').click();file=await downloaded;await file.saveAs(path.join(out,'project.json'));
 const saved=await page.evaluate(()=>localStorage.getItem('dometic-movements'));await page.reload();await page.waitForFunction(()=>project.session.status==='done');assert.equal(await page.evaluate(()=>project.observedCycles),20);
 const migration=await page.evaluate(()=>{const p=structuredClone(project);p.version=1;p.completed=[1];delete p.walkingSpeed;delete p.observedCycles;delete p.targetMinutes;delete p.walkStart;delete p.positionSource;return validate(p)});
 assert.equal(migration.version,2);assert.equal(migration.observedCycles,1);
 assert(await page.evaluate(()=>{const p=structuredClone(project);p.positions[0].x=3;try{validate(p);return false}catch{return true}}));
 // Route bends use the aisle path, and unscaled observations don't invent distances.
 await page.locator('#clearRoute').click();await page.evaluate(()=>{project.metresPerUnit=null;render()});await page.locator('#start').click();await page.locator('[data-station]').first().click();await page.locator('[data-station]').nth(1).click();assert.equal(await page.evaluate(()=>summary().distance),null);
 await page.locator('#clearRoute').click();await page.evaluate(()=>{project.metresPerUnit=.01;project.height=600;project.positions[0].x=.1;project.positions[0].y=.1;project.positions[1].x=.4;project.positions[1].y=.5;render()});await page.locator('#start').click();
 await page.evaluate(()=>{hitPosition(project.positions[0].id);addVisit({x:.4,y:.1,position:null,bend:1});hitPosition(project.positions[1].id)});
 assert(Math.abs(await page.evaluate(()=>legs()[0].distance)-5.4)<1e-10);
 // Mobile touch dragging plus tap-to-place fallback, with no horizontal overflow.
 await page.locator('#clearRoute').click();await page.setViewportSize({width:390,height:844});await page.evaluate(()=>chooseLanguage('sv'));await page.screenshot({path:path.join(out,'mobile.png'),fullPage:true});
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'mobile overflow');
 await page.locator('#board').scrollIntoViewIfNeeded();const c=await page.locator('#board .node circle').first().boundingBox(),b=await page.locator('#board').boundingBox();
 const cdp=await page.context().newCDPSession(page);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:c.x+c.width/2,y:c.y+c.height/2}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:b.x+b.width*.3,y:b.y+b.height*.4}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 assert(Math.abs(await page.evaluate(()=>project.positions[0].x)-.3)<.03,'touch drag');
 assert.deepEqual(errors,[],'no browser exceptions');
 console.log('PASS: real Excel import/export, automatic rename, double-click, mouse/touch dragging, optional cycles, measured/mixed walking time, pause, persistence/migration, overrides, route bends, translations, CSV/JSON and PDFs.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
