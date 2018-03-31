/*
// Showing how to read file using file Stream
var http = require('http');
var fs = require ('fs');
var oppressor = require ('oppressor');

var server = http.createServer(function(req, res){
        var stream = fs.createReadStream('/Users/becky/Documents/GitHub/HTML-Codes/' + 'demo2.html');
        stream.pipe(res);
});
    server.listen(8080);
// End of code

// Beginning
var Readable = require ('stream').Readable;
var rs = new Readable;
rs.push('Apple \n');
rs.push('Banana \n');
rs.push('Cat \n');
rs.push('Dog \n');
rs.push(null);
rs.pipe(process.stdout);
// Ending

// Beginning
var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
   rs.push(String.fromCharCode(c++));
  //if (c > 'z'.charCodeAt(0))
      if (c > 122)
      rs.push(null);
};
rs.pipe(process.stdout);

process.on('exit', function(){ console.log('\n End');});
process.stdout.on('error', process.exit);
// Ending


process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
});

// Code below to show how it works
//(echo abc; sleep 1; echo def; sleep 1; echo ghi) | node streamPractice.js
*/

var sam = function(a,b){
    return  `The sum of the value is ${a+b}` ;// ES6 method `
};

console.log(sam(2,3));
