let var1=34;
let var2="String";
let var3=true;
let var4=null;
let var5=undefined;

// Object == like dictionary key:value pair
let employee={
    name:"xyz",
    salary:2,
    channel:"xyz.com",
    channel2:"xyz2.com"
};
console.log(employee);


// Arrays
let names=[1,24,45,"string",null,undefined];
console.log(names);
console.log(names[4]);

// Array using new keyword
let newarr=new Array(1,2,3,4,5,"string");
console.log(newarr);
console.log(newarr.length);

// Sorting in arr
let unsortarr=[56,4,43,2,45,null];
console.log(unsortarr);
let sortarr=unsortarr.sort();
console.log(sortarr);

// Pushing inside array
names.push("Pushed element");
console.log(names);

// Accessing object element
employee={
    name:"xyz",
    salary:2,
    channel:"xyz.com",
    channel2:"XYZ2.com",
    "channel 2":"xyz2.com"
};
console.log(employee.channel);
console.log(employee.channel2);
console.log(employee['channel 2']);

// to make empty undefined element array
let newarr2=new Array(23);
console.log(newarr2);

