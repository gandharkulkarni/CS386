// String variable initialized to empty string
let strPrimeNums = "";
// Boolean variable initialized to true
let isPrime = true;
//Outer loop with iteration variable number. Loop over 2 to 100 inclusive
for(let number=2; number<=100; number++){
    //Inner loop with iteration variable i. Loop over 2 to (number-1) inclusive
    for(let i=2; i<number; i++){
        //number + colon and a space, then iteration variable i
        //console.log(number +": "+ i);
        
        //if division of number by i results in no remainder
        if(number%i===0){
            isPrime=false; // Set Boolean variable isPrime to false
        }
    }

    //if isPrime is still true
    if(isPrime===true){
        //add current number to output string strPrimeNums
        strPrimeNums += number + ",";
    }
    //Reset isPrime variable
    isPrime=true;
}
//Output string
//console.log(strPrimeNums);
//Remove trailing comma at the end of the string using substring
strPrimeNums=strPrimeNums.substring(0,strPrimeNums.length-1);
//Output cleaned string
console.log(strPrimeNums);

//Expected result
//Prime Numbers from 1 to 100 (From internet)
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

//Actual result
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97