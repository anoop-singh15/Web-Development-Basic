// Three types of modules
// 1>Built in
// 2>User-defined
// 3>Third party (by using npm)

const fileSystem=require("fs");


//to read file first "we should have already existing file"
let read=fileSystem.readFileSync("delete.txt","utf-8");
// Printing file content
console.log(read);

// To replace some content form delete.txt and write its content in new delete.txt
read=read.replace("file","File");
// writing in non existing new file 
fileSystem.writeFileSync("newdelete.txt",read);




