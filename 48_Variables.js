var a = "hello world";
var b = 78;
console.log(a);
console.log(b);

// OPERATORS 
/*
1> UNARY operator
2> Binary operator
 */

// Example of unary operator
b=-b;
console.log(b);

// Example of Binary operator 
b=-b+2;
console.log(b);

// Binary on string
a=a+" Earth";
console.log(a);

// Artihmetic operators
var num1=2;
var num2=3;
console.log("The value of "+num1+" + "+num2+" is "+(num1+num2));
console.log("The value of "+num1+" - "+num2+" is "+(num1-num2));
console.log("The value of "+num1+" * "+num2+" is "+(num1*num2));
console.log("The value of "+num1+" / "+num2+" is "+(num1/num2));
console.log("The value of "+num1+" % "+num2+" is "+(num1%num2));

// EXPONENTIAL OPERATOR ** FOR POWER X**Y
console.log("The value of Exponential operator "+num1+" ** "+num2+" is "+(num1**num2));

// Increment operator
console.log("The value of Increment  operator "+num1+" ++ is "+(num1++));
console.log("after increment num1 is "+num1);

// POST Increment 
console.log("Post increment of num1 after num1 is 3--> "+ (++num1));

// Decrement operator 
console.log("The value of decrement  operator "+num1+" -- "+" is "+(num1--)+' new num1 '+(num1));

// POST Decremnt 
console.log("Post increment of num1 after num1 is 3--> "+ (--num1)); 