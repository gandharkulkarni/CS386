const event = require('events');
let evtEmit = new event();
evtEmit.on('start',function(){
    console.log(`Event started on ${new Date()}`);
})
evtEmit.on('end', fEnd);
function fEnd(){
    console.log(`Event ended on ${new Date()}`);
}

evtEmit.emit('start');
setTimeout(function(){
    evtEmit.emit('end');
},5000);
