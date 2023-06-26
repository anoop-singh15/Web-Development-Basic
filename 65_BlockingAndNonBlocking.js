// Synchronous and blocking--->Line by Line Execution

// Asynchronous or non-blocking--->line by line execcution not guranteed
// callbacks on fire


const fs=require("fs");
// readFile("filename","openmode",callbackfunction)

// Asunchronous funstion fs.readFile
fs.readFile("del.txt","utf-8",(err,data)=>{
    
    console.log(err,data);
});

// Prints first
console.log('print after text');