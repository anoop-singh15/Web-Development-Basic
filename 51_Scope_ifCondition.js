var string1 = "This is string1";
var string1 = "This is a string2";
console.log(string1);

// Block level scope {}
let a = "let a outside block";
{
    let a = "let a inside block";
    console.log(a);
}
console.log(a);

// constant  cannot be replaced
const b = "Constant string";
// b="new constant string";
console.log(b);

// Conditions if,else and else if
let age = 3;
if (age >= 18) {
    console.log("Age is 18 or above");
}
else if (age == 3) {
    console.log("age is 3");
}
else {
    console.log("age less than 18");
}

// Switch case
const num = 1;
switch (num) {
    case 1:
        console.log("num is 1");
        break;
    case 2:
        console.log("Num is 2");
        break;
    case 3:
        console.log("num is 3");
        break;
    default:
        console.log("num is none of 1, 2, 3");
        break;
}
