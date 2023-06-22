let now=new Date();
console.log(now);

// date when javascript formed--> time afte 0 miliseconds
let dt=new Date(0);
dt=new Date(1000);
console.log(dt);

// To initialize date
// passing arguments new Date(year,month,date,hours,minutes,seconds,milliseconds);
let newDate=new Date("2023-06-22");
newDate=new Date(2025,7,12,8,3,1);
console.log(newDate);

let yr=newDate.getFullYear();
console.log(yr);

let date=newDate.getDate();
console.log(date);

let month=newDate.getMonth();
console.log(month);

let hours=newDate.getHours();
console.log(hours);

// setting date --->Used to make stopwatch
newDate.setDate(322);   //auto correct date if put more than month date
console.log(newDate);

// date.now can be used to find runtime of code
console.log(Date.now());

newDate.setMonth(10);
console.log(newDate);