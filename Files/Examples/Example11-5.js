let activites = [
    ["Work",9],
    ["Eat",1],
    ["Commute",2],
    ["Play Game",1],
    ["Sleep",7] 
];
let rowLen = activites.length;
let colLen = activites[0].length;
let strOutput = "";
console.log("Array of activities")
for(let row=0; row<rowLen; row++){
    
    strOutput += `Row: ${row}: `;
    for(let col=0; col<colLen;col++){
        strOutput += `Col ${col}: ${activites[row][col]} / `;
    }
    strOutput = strOutput.substring(0, strOutput.length-2);
    strOutput +="\n";
}
console.log(strOutput);