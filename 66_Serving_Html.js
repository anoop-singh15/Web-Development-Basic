// Creating Server
const http=require("http");
const fs=require("fs");
// Blocking Execution
const htmlFile=fs.readFileSync("66_ServingHtml.html");

const server=http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.end(htmlFile);
})

// server.listen(port,host,function)
// if port is 80 we can run program by using only host name otherwise we have to give port name also
// 127.0.0.1:8000
server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening on Port :8000");
})