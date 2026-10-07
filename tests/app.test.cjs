const {JSDOM,VirtualConsole}=require('jsdom');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'index.html'),'utf8');
const code=source.replace('</script>',`window.qa={get project(){return project},set project(v){project=v},get lang(){return lang},get mode(){return mode},get translations(){return translations},legs,segments,totals,elapsed,validate,render,save,chooseLanguage,referenceClick,addVisit,hitPosition,clearObservation};</script>`);
let clock=Date.parse('2026-10-07T12:00:00Z');
function boot(saved){const errors=[];const vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e));const dom=new JSDOM(code,{url:'https://mrmartinpet.github.io/Dometic-AnalyzeMovements/?lang=sv',runScripts:'dangerously',virtualConsole:vc,beforeParse(w){w.Date.now=()=>clock;w.confirm=()=>true;w.print=()=>w.didPrint=true;w.URL.createObjectURL=()=> 'blob:test';w.URL.revokeObjectURL=()=>{};w.setInterval=()=>0;w.setTimeout=()=>0;if(saved)w.localStorage.setItem('dometic-movements',saved)}});assert.deepEqual(errors,[]);return dom}
let dom=boot(),w=dom.window,d=w.document,q=w.qa;
function click(id){d.getElementById(id).click()}
function val(id,v){d.getElementById(id).value=v;d.getElementById(id).dispatchEvent(new w.Event('input',{bubbles:true}));d.getElementById(id).dispatchEvent(new w.Event('change',{bubbles:true}))}
function logInput(kind,v){let e=d.querySelector(`[data-value="${kind}"]`);e.value=v;e.dispatchEvent(new w.Event('change',{bubbles:true}));return e}
function setTwo(){q.project.positions=[{id:'A',name:'A',x:.1,y:.1},{id:'B',name:'B',x:.4,y:.5}];q.project.workstation='Cell';q.project.metresPerUnit=.01;q.render()}
assert.equal(d.getElementById('languageScreen').hidden,true);
click('start');assert.match(d.getElementById('message').textContent,/minst två/);
click('demo');assert.equal(q.project.positions.length,5);assert.equal(q.project.metresPerUnit,.01);
click('reset');setTwo();click('start');assert.equal(q.project.session.status,'running');
q.hitPosition('A');q.hitPosition('B');let legs=q.legs();assert.equal(legs.length,1);assert(Math.abs(legs[0].distance-Math.hypot(3,2.4))<1e-10);assert.equal(d.getElementById('totalMoves').textContent,'1');
q.hitPosition('B');assert.equal(q.legs().length,1,'duplicate taps ignored');
clock+=5000;click('pause');assert.equal(q.elapsed(),5000);clock+=60000;assert.equal(q.elapsed(),5000);
click('start');clock+=3000;assert.equal(q.elapsed(),8000);click('nextCycle');assert.equal(q.project.completed.length,1);assert.equal(q.project.cycle,2);assert.equal(q.legs().length,1);
q.hitPosition('A');assert.equal(q.legs().length,2);assert.equal(q.project.visits.at(-1).cycle,2);click('stop');assert.equal(q.project.completed.length,2);assert.equal(q.project.session.status,'done');assert.equal(q.elapsed(),8000);assert(Math.abs(q.totals(q.legs()).distance-2*Math.hypot(3,2.4))<1e-10);assert.equal(d.getElementById('averageDistance').textContent,'3,84 m');
logInput('actual','5,5');assert.equal(q.legs()[0].distance,5.5);assert.equal(q.legs()[0].steps,5.5/.75);logInput('steps','10');assert.equal(q.legs()[0].steps,10);logInput('actual','0');assert.equal(q.legs()[0].distance,0);assert.equal(q.legs()[0].steps,10,'counted steps independent of distance');
let invalid=logInput('steps','1.5');assert.equal(invalid.getAttribute('aria-invalid'),'true');click('print');assert(!w.didPrint);logInput('steps','0');assert.equal(q.legs()[0].steps,0);logInput('actual','');assert(Math.abs(q.legs()[0].distance-Math.hypot(3,2.4))<1e-10);logInput('steps','');assert.equal(q.legs()[0].steps,q.legs()[0].distance/.75);
const saved=w.localStorage.getItem('dometic-movements');dom=boot(saved);w=dom.window;d=w.document;q=w.qa;assert.equal(q.project.completed.length,2);assert.equal(q.elapsed(),8000);
click('clearRoute');assert.equal(q.project.positions.length,2);click('start');q.hitPosition('A');q.addVisit({x:.4,y:.1,position:null,bend:1});q.render();assert.equal(q.legs().length,0);assert.equal(q.segments().length,1);click('stop');assert.equal(q.project.session.status,'running','cannot finish at a bend');q.hitPosition('B');assert.equal(q.legs().length,1);assert.equal(q.segments().length,2);assert(Math.abs(q.legs()[0].distance-5.4)<1e-10,'aisle bends counted in path, one movement');click('undo');assert.equal(q.legs().length,0);assert.equal(q.segments().length,1);click('undo');assert.equal(q.segments().length,0);q.hitPosition('B');click('nextCycle');click('stop');assert.equal(q.project.completed.length,1,'empty trailing cycle not completed');
click('clearRoute');q.referenceClick({x:.1,y:.1});d.getElementById('referenceLength').value='2';q.referenceClick({x:.3,y:.1});assert(Math.abs(q.project.metresPerUnit-.01)<1e-12);
val('width','12');val('height','6');click('applyScale');assert.equal(q.project.height,500);assert.equal(q.project.metresPerUnit,.012);
q.project.metresPerUnit=null;click('start');q.hitPosition('A');q.hitPosition('B');assert.equal(q.legs()[0].distance,null);logInput('steps','7');assert.equal(d.getElementById('totalSteps').textContent,'7');logInput('actual','3');assert.equal(d.getElementById('totalDistance').textContent,'3 m');assert.equal(q.legs()[0].steps,7);
val('stride','0');assert.equal(d.getElementById('stride').getAttribute('aria-invalid'),'true');val('stride','0,8');assert.equal(q.project.stride,.8);
// Translation coverage and exports
for(const l of ['sv','en','de']){assert.deepEqual(Object.keys(q.translations[l]).sort(),Object.keys(q.translations.en).sort());q.chooseLanguage(l);assert.equal(d.documentElement.lang,l);assert(!Array.from(d.querySelectorAll('[data-t]')).some(e=>e.textContent===e.dataset.t));assert.equal(d.querySelectorAll('#board marker').length,7);let exports=[];w.download=(...args)=>exports.push(args);click('csv');assert.equal(exports.length,1);assert(exports[0][0].startsWith('\ufeffsep=;'));assert(exports[0][0].includes(q.translations[l].workstation));click('saveProject');assert.equal(JSON.parse(exports.at(-1)[0]).session.status,'paused');assert.equal(JSON.parse(exports.at(-1)[0]).session.start,null);click('svgExport');assert(exports.at(-1)[0].includes('http://www.w3.org/2000/svg'));click('print');assert(w.didPrint)}
// Import bounds, HTML and CSV escaping
const p=JSON.parse(JSON.stringify(q.project));assert(q.validate(p));for(const mutate of [p=>p.image='https://attacker.test/image.svg',p=>p.metresPerUnit=-1,p=>p.stride=0,p=>p.positions[0].x=2,p=>p.visits[0].position='unknown',p=>p.positions.push({...p.positions[0]}),p=>p.session.start=Date.now()+1e10]){const copy=JSON.parse(JSON.stringify(p));mutate(copy);assert.throws(()=>q.validate(copy))}
q.project.workstation='=HYPERLINK("example")';q.project.positions[0].name='<img src=x onerror=alert(1)>';q.render();assert.equal(d.querySelectorAll('#stations img').length,0);let out=[];w.download=(...args)=>out.push(args);click('csv');assert(out[0][0].includes("'=HYPERLINK"));
console.log('PASS: movement and bend distances, cycle averages, counted-step overrides, timers, calibration, persistence, validation, all translations, PDF/CSV/SVG/JSON export paths and escaping.');
dom.window.close();
