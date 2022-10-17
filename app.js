var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //to get output from the module
   res.write("The date and time are currently: " + dt.myDateTime());

  res.end('Hello World!');


}).listen(3000);

console.log('my first nodejs page!');

