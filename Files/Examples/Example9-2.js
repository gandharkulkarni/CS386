let dt = new Date();
let firstDayOfMonth = new Date(dt.getFullYear(), dt.getMonth())
console.log(`Today's date in ISO format is ${dt.toISOString()}`)
console.log(`Today's date in local format is ${dt.toLocaleDateString()}`)
console.log(`First day of current month is ${firstDayOfMonth.getDate()}`)
let diff = dt-firstDayOfMonth;
console.log(`Difference between those two dates is ${diff}`);
console.log(`Difference in hours is ${Math.round(diff/1000/3600,0)}`);
console.log(`Difference in days is ${dt.getDate() - firstDayOfMonth.getDate()}`);
