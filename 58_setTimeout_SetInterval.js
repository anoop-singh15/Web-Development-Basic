function greet(name,endText) {
    console.log("Hello world " + name+" "+endText);

}

greet("Earth","Lorem, ipsum.");


// setTimeout --->runs once after gven miliseconds
let timeOut1=setTimeout(greet, 5000, "Earth1","Lorem, ipsum.");

// In setTimeout funciton does not need paranthesis otherwise it will print the line instantly without arguments
// setTimeout(greet(), 5000, "Earth","Lorem, ipsum.");

let timeOut2=setTimeout(greet, 5000, "Earth2","Lorem, ipsum.");
console.log(timeOut2);
clearTimeout(timeOut2);

/*
SETINTERVAl --->same as settimeout but runs repeated number of times after interval of time
 */

intervalId=setInterval(greet,2000,"Earth3","Lorem, ipsum.");
clearInterval(intervalId);


// To make watch
function displayTime(){
    let time=new Date();
    // console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(displayTime,1000);



