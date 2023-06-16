let result = fAdd(34,35);
alert(result)
console.log(result)

let num1 = 35;
let num2 =34;
result = fAdd(num1, num2);

alert(result)
console.log(result)

alert(fAdd(num1, num2))

function fAdd(val1, val2){
    let sum = val1+ val2;
    return sum;
}