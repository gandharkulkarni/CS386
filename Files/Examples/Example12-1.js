let objX = {x:5, y:12};
let objZ = {x:5, y:12};
console.log(`objX is equal to objZ = ${objX==objZ}`);
let objY = objX;
objY.y = 10;
console.log(`Property of objX = ${objX.y}`);