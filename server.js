var http = require('http');

http.createServer( function(req, res) {
//add header content
res.writeHead(200, {'Content-Type': 'text/html'});

res.write("Welcome to nodejs server runing on port 3900");
res.write("the programmer is Guled!");

// to get content after url using these argument
res.write(req.url);

res.end();

}).listen(3900);