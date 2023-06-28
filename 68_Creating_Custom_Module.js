console.log("This is index js file 68");

// to import user defined module

// const avg= require("./mod");
// console.log(avg([2,2])); 

// import using object
const mod= require("./mod");
/*
console.log(mod.avg([2,7])); 
console.log(mod.name); 
console.log(mod.file); 
*/

// direct module import
console.log(mod.repo); 

