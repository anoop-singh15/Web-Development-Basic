function greet(){
    console.log("Heello world");
}
greet();

// New Imlementation of function called arrow function

let sum = (a,b)=>{
    return a+b;
}
sum(1,2);

setTimeout(greet,3000);
setTimeout(sum,5000,3,5);

// new setTimeout 
setTimeout((a,b)=>{
    console.log(a+b+1);
},3000,2,5)

let minus = (a,b)=> (a-b);
 minus = (a,b)=> console.log(a-b);
minus(5,5);

let half = a => a/2;    //Write function and pass number in console only for one argument

let greet2 =()=>console.log('new hello world');
greet2();

// laxical this when obj function is arrow this is of parent object and not of funciton
let obj={
    greeting:"hello ",
    names:["python ","web","Android",],
    speak(){
        this.names.forEach((students)=>{
            console.log(this.greeting+"Programming "+students);
        });
    }
}
obj.speak();