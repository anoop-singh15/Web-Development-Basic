let m=Math;
console.log(m); 
document.getElementsByClassName('container').innerHtml=m;

// math important constraints
console.log("Math.E "+m.E);
console.log("Math.PI "+m.PI);
console.log("Math.LN2 "+m.LN2);
console.log("Math.SQRT1_2 "+m.SQRT1_2);
console.log("Math.LOG2E "+m.LOG2E);

// math functions round

let a=343.333323;
let b=32;

console.log("the value of  a and  b is "+a,b);
console.log("the value of rounded a and  b is "+m.round(a),m.round(b));

// pow function
console.log("the value of  pow(a,b) a power  b is "+m.pow(2,3));
console.log("the value of  sqrt(a)  "+m.sqrt(36));


// Ceil and floor function
console.log("5.8 rounded up to nearest integer  "+m.ceil(5.8));
console.log("5.8 rounded up down to nearest integer  "+m.floor(5.8));
console.log("Absolute values of 5.6 is  "+m.abs(5.6));
console.log("Absolute values of -5.6 is  "+m.abs(-5.6));

// Trignometric functions give values  in radians
console.log("the value of sin(pi/2) is "+m.sin(m.PI/2));
console.log("the value of tan(pi/4) is "+m.tan(m.PI/4));
console.log("the value of cos(pi/4) is "+m.cos(m.PI/4));

// Min and max function
console.log("The min value of 4,5,15 is "+m.min(4,5,15));
console.log("The max value of 4,5,15 is "+m.max(4,5,15));

// Random number generation
let r=m.random();
console.log(r);

// to genterate random between 0 and 100;a+(b-a)*Math.random()
let ax=0;
let bx=100;
let r0_100=ax+(bx-ax)*Math.random();
let random=Math.round(r0_100);
console.log("random number between 0 to 100 --->"+random);
