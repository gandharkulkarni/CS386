let carBrands = ["Ford","Honda","BMW"];
let len = carBrands.length;
console.log("----for loop----");
for(let i=0; i<len; i++){
    console.log(`Element ${i}: ${carBrands[i]}`);
}
console.log("----for....in loop----");
for(let i in carBrands){
    console.log(`Index = ${i}`);
}
console.log("----for....of loop----");
for(let i of carBrands){
    console.log(`Element = ${i}`);
}