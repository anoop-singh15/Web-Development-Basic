// var a="Strings";
var a='Strings';
var name1=' sololeveling';
var message =" hello world";

var temp=`${message}--->basic print of javascript `;
console.log(a + name1 + message);
console.log(temp);

// var.length return total  number of character
var len=name1.length;
console.log(`The lenght of name is ${len}`);

// Escape sequence
console.log(`\n\n     Hello\nworld\t earth\b\\n`);

// String constructor --> like char array
var y=new String("NEW String");
console.log(y);

// To dynamically show string in DOM-->Document object model
document.getElementById('box').innerHTML= '<p>"This is dynamically (JS) typed content"</p><h3>"This is heading using js---h3"</h3>';