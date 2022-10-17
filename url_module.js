var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

// Split a web address into readable parts:
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

//to output
res.write(q.host);
res.write(q.pathname);
res.write(q.search);

var qdata = q.query;
res.write(qdata.month);


console.log(adr);

res.end();

}).listen(3000);







