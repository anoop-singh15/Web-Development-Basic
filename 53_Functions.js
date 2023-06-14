console.log("Functions Basics");

let name="sololeveling";
let name1="Tower of god";

console.log(name + " the best manhwa ");
console.log(name1 + " the best manhwa ");

// To avoid repetition we use function
function comment(name3,manga="Default manga value if not passed in function call")
{
    let name ="local variabal in scope comment";
    console.log(manga +" the goat");
    console.log(name3 +" The best manhwa");
    console.log(name);
}

let manga="Naruto";

comment(undefined,manga);
comment(null,manga);
comment('Dice',manga);

// we can put default value in finction argument new AND IMPORTANT CONCEPT
comment(1);

// To Return value  from function

function sum(a,b,c)
{
    return (a+b+c);
    // Function will not run after return 
}

let x=sum('a','b','c');
x1=sum(1,10,3);
console.log(x+'\n'+x1);

// Function to return max or min btw 2 numbers
function max(num1,num2)
{
    if(num1>num2)
    {
        return num1;
    }
    return num2;
}

function min(num1,num2)
{
    if(num1<num2)
    {
        return num1;
    }
    return num2;
}

function max_min(num1,num2)
{
    if(num1==num2)
    {
        return (num1+" equal to "+num2);
    }
    else if(num1>num2)
    {
        return (num1+" greater than "+num2);
    }   
    else
    {
        return (num2+ " greater than "+num1);
    }

}

let max1=max(10,6);
let min1=min(10,6);
let new1=max_min(5,5);
console.log(max1);
console.log(min1);
console.log(new1);
