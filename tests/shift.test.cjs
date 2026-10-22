// Run with jsdom installed: node tests/shift.test.cjs
const {JSDOM}=require('jsdom');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const dom=new JSDOM(fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://movements.test/',runScripts:'outside-only'});
const w=dom.window;
w.matchMedia=()=>({matches:false});
w.eval(fs.readFileSync(path.join(root,'app.js'),'utf8')+'\nwindow.runTest=code=>eval(code);');
const run=code=>w.runTest(code), input=(id,value)=>{const e=w.document.getElementById(id);e.value=value;e.dispatchEvent(new w.Event('input',{bubbles:true}))};
try{
 run(`chooseLanguage('sv');project=fresh();project.workstation='Shift test';project.metresPerUnit=.01;project.walkingSpeed=1;project.stride=.5;project.positions=[{id:'a',name:'A',x:0,y:0},{id:'b',name:'B',x:1,y:0}];project.visits=[{id:'v1',position:'a',x:0,y:0,cycle:1,time:0},{id:'v2',position:'b',x:1,y:0,cycle:1,time:30000}];project.session={status:'done',elapsed:60000,start:null};render();`);
 assert.equal(run('summary().distance'),10);
 assert.equal(run('shiftEstimate(summary())'),null);
 input('observedCycles','2');input('estimatedShiftCycles','200');
 assert.equal(run('shiftEstimate(summary()).walkTime'),1000000); // 10 s / 2 × 200, not observation duration
 assert.equal(run('shiftEstimate(summary()).distance'),1000);
 assert.equal(run('shiftEstimate(summary()).steps'),2000);
 assert.equal(run('shiftEstimate(summary()).moves'),100);
 assert.equal(w.document.querySelector('#shiftStats strong').textContent,'16:40');
 assert.equal(JSON.parse(w.localStorage.getItem('dometic-movements')).estimatedShiftCycles,200);
 const stored=run('JSON.stringify(project)');run('project=validate(JSON.parse(localStorage.getItem("dometic-movements")));render()');
 assert.equal(w.document.getElementById('estimatedShiftCycles').value,'200');
 input('estimatedShiftCycles','0');assert.equal(run('shiftEstimate(summary()).walkTime'),0);
 input('estimatedShiftCycles','');assert.equal(run('shiftEstimate(summary())'),null);
 for(const bad of ['-1','1.5','abc','1000001']){input('estimatedShiftCycles',bad);assert.equal(w.document.getElementById('estimatedShiftCycles').getAttribute('aria-invalid'),'true');assert.equal(run('shiftEstimate(summary())'),null)}
 input('estimatedShiftCycles','200');input('observedCycles','0');assert.equal(run('shiftEstimate(summary())'),null);
 input('observedCycles','2');
 run(`project.visits[1].actual=20;project.visits[1].steps=30;updateStats()`);
 assert.equal(run('shiftEstimate(summary()).walkTime'),2000000);assert.equal(run('shiftEstimate(summary()).steps'),3000);
 input('walkingSpeed','2');assert.equal(run('shiftEstimate(summary()).walkTime'),1000000);
 run(`window.downloads=[];download=(content,mime,name)=>window.downloads.push({content,mime,name});$('csv').click();exportProject()`);
 assert(w.downloads[0].content.includes('Gångtid / skift'));
 assert(w.downloads[0].content.includes('16:40'));
 assert.equal(JSON.parse(w.downloads[1].content).estimatedShiftCycles,200);
 for(const lang of ['sv','en','de']){run(`chooseLanguage('${lang}')`);assert(!w.document.getElementById('shiftEstimateTitle').textContent.includes('shiftEstimate'))}
 input('estimatedShiftCycles','1000000');run('render()');assert.equal(w.document.getElementById('estimatedShiftCycles').value,'1000000');
 const old=JSON.parse(stored);delete old.estimatedShiftCycles;w.old=old;assert.equal(run('validate(window.old).estimatedShiftCycles'),null);
 for(const bad of [-1,1.5,1000001,'200']){w.old.estimatedShiftCycles=bad;assert.throws(()=>run('validate(window.old)'))}
 run('project.visits=[];updateStats()');assert.equal(run('shiftEstimate(summary())'),null);
 console.log('PASS: shift arithmetic, walking speed, overrides, zero/missing/invalid counts, persistence, legacy import, CSV/JSON and three languages');
}finally{w.close()}
