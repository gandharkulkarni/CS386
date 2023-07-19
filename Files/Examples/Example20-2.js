let fAdd = function(num1, num2){
    return num1+ num2;
};

function fCalc(pnum1, pnum2, fOp){
    return fOp(pnum1, pnum2);
}

console.log("Sum = "+fCalc(34,35,fAdd));
