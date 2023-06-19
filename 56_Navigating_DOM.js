
// Accessing Dom using ID
let contain1=document.getElementById('main');
console.log(contain1);

let nav=document.getElementById('nav');
console.log(nav);

console.log(nav.innerHTML);

// nav.innerHTML="<li>li element using JS</li>";


// Accessing Dom using Class Name
let containers=document.getElementsByClassName('container');
console.log(containers);
console.log(containers[1].innerHTML="<h4>new change</h4>");

// Accessing Dom using selectors
let selectors=document.querySelector('.container');
let selector2=document.querySelector('#nav');
// Print only first child
let selector3=document.querySelector('#nav>li');
console.log(selectors);
console.log(selector2);
console.log(selector3);

// Query selector all

let selector4=document.querySelectorAll('#nav>li');
console.log(selector4[2].innerHTML="<li>new text</li>");