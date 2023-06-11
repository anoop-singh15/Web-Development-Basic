var str="String Functions";  
console.log(str);

// Returns First occurence of substring
var position = str.indexOf('F');
console.log(position);

// Returns last occurence of substring
position= str.lastIndexOf('F');
console.log(position);

// Substring From a string
var substring1=str.slice(2,6);
// DIFFERENCE BTW SLICE AND SUBSTRING IS slice can take negative values
substring1=str.substring(0,7);
console.log(substring1);

// Substr(first,second)
// first element is starting pos and second element is how many characters should be inside string
substring1=str.substr(4,2);
console.log(substring1);

// To replace a string previous string will not change
var rep=str.replace('Functions','Concepts');
console.log(`New string after replace-->${rep} old string-->${str}`);

// Uppercase and lower case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Concat function add string
var newstring =str.concat(' Concepts Introduction');
console.log(newstring);

// Trim functions
var stringWithWhiteSpaces=" This string contains   whitespace        ";
console.log(stringWithWhiteSpaces);
console.log(stringWithWhiteSpaces.trim());

// Extract character from string
var char3=str.charAt(3);
var char3=str.charCodeAt(3);
console.log(char3);

// String slicing 
console.log(str[3]);
