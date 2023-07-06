console.log(`CC Number 4539 6779 0801 6808 is ${fVerifyCC('4539 6779 0801 6808')}`);
console.log(`CC Number 4532 7787 7109 1795 is ${fVerifyCC('4532 7787 7109 1795')}`);


//Function to calculate sum of series of digits
function fSumDigits(pNum){
    let sum=0;
    //Loop over each digit
    for(let digit of pNum){
        //Accumulate the sum
        sum += parseInt(digit);
    }
    return sum;
}

//Function to remove blank spaces from string
function fRemoveSpaces(pString){
    let newString='';
    //Loop over each character of pString
    for(let char of pString){
        //If character is space skip it
        if(char===' '){
            continue;
        }
        //Else add it to newString variable
        else{
            newString+=char;
        }
    }
    return newString;
}

//Function to verify credit card number
function fVerifyCC(pCC){
    let resultStr ='Invalid';

    //remove spaces from card number
    let ccWithoutSpaces = fRemoveSpaces(pCC);
    let sum = 0;

    //Loop all digits of CC from right
    for(let i=ccWithoutSpaces.length-1; i>=0; i--){
        //If it's every second element
        if(i%2===0){
            //Double the digit
            let temp = parseInt(ccWithoutSpaces[i])*2;
            //If result is 2 digit number
            if(temp>9){
                //Sum the digits
                temp = fSumDigits(String(temp)); 
                //Accumulate in sum
                sum+= temp;
            }else{
                //Accumulate in sum
                sum += temp;
            }
        }else{
            //Accumulate in sum
            sum += parseInt(ccWithoutSpaces[i]);
        }
    }
    //If resulting sum is divisible by 10 the valid CC number
    if(sum%10===0){
        resultStr = 'Valid';
    }
    //return the result
    return resultStr;
}