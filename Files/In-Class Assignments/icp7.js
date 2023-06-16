main();

function main(){
    let sales = ['2031, 3412, 2512, 4421', '1984, 4154, 2893, 3189', '2152, 4267, 5221, 4742'];
    let year = [2016, 2017, 2018];
    for(let i=0; i<year.length; i++){
        // console.log(`Quarterly sales for the year ${year[i]} = ${sales[i]}`);   
        console.log(`Total sales for the year ${year[i]} = ${fYearlyTotals(sales,i)}`);
    }
}

function fYearlyTotals(arr, index){
    //Split comma seperated string
    let quarterlySales = arr[index].split(',');
    let annualTotal = 0;
    //Iterate over elements in quaterlySales
    for(let i=0; i<quarterlySales.length; i++){
        annualTotal += Number(quarterlySales[i]);
    }
    return annualTotal;
}