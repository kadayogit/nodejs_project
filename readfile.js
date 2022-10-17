var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  //read file from index html page
   fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(3000);


//Create a new file using the appendFile() method:
fs.appendFile('nodejsfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


//Create a new, empty file using the open() method:
fs.open('nodejsfile.txt', 'w', function (err) {
  if (err) throw err;
  console.log('Opened!');
});


// Create a new file using the writeFile() method:
fs.writeFile('nodejsfile.txt', 'Hello Guled Mohamed!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Append "This is my text." to the end of the file "nodejsfile.txt":
fs.appendFile('nodejsfile.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// Replace the content of the file "mynewfile3.txt":
fs.writeFile('nodejsfile.txt', 'This is my Replaced text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


// Delete "mynewfile2.txt":
fs.unlink('nodejsfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


// Rename "mynewfile1.txt" to "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});