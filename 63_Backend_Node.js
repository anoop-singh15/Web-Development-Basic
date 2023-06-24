// console.log("Hello World");

// code in node website
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   change text/plain to text/html
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Date in JS</title>
      <link rel="stylesheet" href="59_Date.css">
  </head>
  
  <body>
      <h3>Date and Time in JS</h3>
      <div class="container">
          
          <div id="hr"  class="circle"></div>
          <div id ="min"  class="circle"></div>
          <div id ="sec"  class="circle"></div>
           
      </div>
      <script src="59_DateTime.js"></script>
      <script src="59_Date_2.js"></script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});