//2D  array below represents sales data for months Jan – Dec for the years 2016 – 2018. Each row represents a year, and each column represents the month.
let sales = [
    [345.54, 389.21, 745.90, 451.89, 395.67, 451.45, 598.42, 575.64, 523.78, 678.55, 874.56, 945.34],
    [423.54, 423.87, 432.87, 534.77, 385.29, 642.89, 452.84, 523.88, 554.78, 767.90, 523.44, 899.34],
    [623.87, 518.66, 372.67, 745.56, 634.56, 429.88, 528.67, 418.56, 276.52, 514.95, 639.52, 786.58]
];
console.log(fCalcRowTotal(sales,1));
console.log(fCalcColTotal(sales,5));
fCalcTotalSales(sales);
fCalcTotalSalesWithAvg(sales);

// Part 1
//Function to calculate total sales for a year
function fCalcRowTotal(salesArr, rowIndex){
    if(rowIndex<0 || rowIndex>2){
        return "Invalid Row Index";
    }else{
        let rowTotal=0;
        for(let i=0; i<salesArr[rowIndex].length; i++){
            rowTotal += salesArr[rowIndex][i];
        }
        return rowTotal
    }

}

// Part 2
//Function to calculate total sales of a month across the years
function fCalcColTotal(salesArr, colIndex){
    if(colIndex<0 || colIndex>11){
        return "Invalid column index";
    }
    else{
        let colTotal =0;
        for(let i=0; i<salesArr.length; i++){
            colTotal += salesArr[i][colIndex];
        }
        return colTotal;
    }
}

// Part 3
// Function to calculate yearly and monthly total sales
function fCalcTotalSales(salesArr){
    let year = 2016;
    let month = 1;
    console.log("------------Totals per year------------");
    for(let i=0; i<salesArr.length; i++){
        let yearlyTotal = fCalcRowTotal(sales,i);
        console.log(`Total for year ${year}\t\t= ${yearlyTotal.toFixed(2)}`);
        year++;
    }
    console.log("------------Totals per Month------------");
    for(let i=0; i<salesArr[0].length; i++){
        let monthlyTotal = fCalcColTotal(sales, i);
        console.log(`Total for month ${month}\t\t= ${monthlyTotal.toFixed(2)}`);
        month++;
    }
}

// Part 4
// Function to calculate yearly and monthly average sales
function fCalcTotalSalesWithAvg(salesArr){
    let year = 2016;
    let month = 1;
    console.log("------------Totals per year------------");
    let sum=0;
    for(let i=0; i<salesArr.length; i++){
        let yearlyTotal = fCalcRowTotal(sales,i);
        sum +=yearlyTotal;
        console.log(`Total for year ${year}\t\t= $${yearlyTotal.toFixed(2)}`);
        year++;
    }
    console.log("------------------------");
    console.log(`Yearly average sales\t\t= $${sum/salesArr.length}`);
    console.log("------------Totals per Month------------");
    for(let i=0; i<salesArr[0].length; i++){
        let monthlyTotal = fCalcColTotal(sales, i);
        console.log(`Total for month ${month}\t\t= $${monthlyTotal.toFixed(2)} (Monthly average sales = $${(monthlyTotal/salesArr.length).toFixed(2)})`);
        month++;
    }
}
