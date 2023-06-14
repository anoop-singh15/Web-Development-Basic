let s = 0;
for (let i = 1; i < 6; i++) {

    console.log(s);
    s = s + (i) + " ";
}
console.log(s);

let language = ["c", "c++", "python", "Java", "Javascript"];
for (let i = 0; i < language.length; i++) {
    console.log("Programming languages "+language[i]);
}

// For each new loop
language.forEach(function f(element){
    console.log("\nProgramming languages printed by latest method forEach loop "+element)
});

// for of loop
console.log("\n")
for(newelement of language){
    console.log("Programming languages printed by latest method  for of loop "+newelement)
}

// loop to iterate over objects in Javascript For in 
let employee={
    name:"Xyz",
    salary:10,
    add:"Abc"
}
console.log("\n");
for(key in employee)
{
    console.log(`The ${key} of employee is ${employee[key]}`);
}

// While loop
let i=0;
while(i<10)
{
    console.log(`${i} value of i`);
    i++;
}

// Do while loop
let j=10;
do{
    console.log(`${j} value of j greater than 5 but we are inside do while  `);
    j++;
}while(j<5);
