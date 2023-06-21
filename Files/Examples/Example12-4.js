let object = {a:1, b: false, c: null, d:"", f:undefined, z: new Date()};
fObjLoop(object);

let serial = JSON.stringify(object);
console.log(serial);

let restore = JSON.parse(serial);
fObjLoop(restore);

function fObjLoop(object){
    for(prop in object){
        console.log(`${prop} : ${object[prop]}`);
    }
}
