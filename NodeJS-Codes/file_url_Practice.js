/*
Please run each code block one by one
Unblocked one and Blocked the rest
to avoid error
(Thanks for visiting)
*/
var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');



// Start of code
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc('Hello World' + '<br><br>')); // Showing how to use Upper Case function

    res.write(req.url + '<br><br>'); // Return the url part of the request object:
    var q = url.parse(req.url, true).query;
    var txt = q.year + '  ' + q.month;
    res.write(txt); // Showing the year and month
    res.end();
});
console.log('connected');
server.listen(3000);
// Try with sample "http://localhost:3000/default.htm?year=2017&month=february%27"
// End of code



/*
//Start of code
// Showing how to Read a file
var server = http.createServer(function(req, res){
        fs.readFile('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            if(err) throw err;
            res.write(data);
            return res.end();
            console.log('File read and displayed');
        });
});
console.log('connected');
server.listen(3000);
// End of code
*/


/*
//Start
// Showing how to Append a file
var server = http.createServer(function(req, res){
fs.appendFile('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo1.html', 'I am New to this ', function(err, data) {
    if (err) throw err;
    console.log('Append and saved!'); // can also be updated
    return res.end();
});
});
console.log('connected');
server.listen(3000);
// End of code
*/

/*
// Showing how to Write/Update file
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.writeFile('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo3.html', 'Neatly done, do not worry because you will not see it in the browser. ', function (err) {
        if (err) throw err;
        console.log('Done!');
    });
});
console.log('connected');
server.listen(3000);
// End of code
*/

/*
//Start
// Showing how to Open a file
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.open('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo.html', 'w', function (err, file) {
        if (err) throw err;
        console.log('Opened!');
    });
});
console.log('connected');
server.listen(3000);
// End of code
*/


/*
// Showing how to rename and delete file using fs
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.rename('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo2.html', '/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo_renamed.html', function(err){
        if(err) throw err;
        console.log('Renamed');
    });
});
console.log('connected');
server.listen(3000);
// End of code
*/


/*
// Showing how to rename and delete file using fs
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
        fs.unlink('/Users/becky/Documents/GitHub/NodeJS/NodeJS-Codes/demo_renamed.html', function(err){
                if(err) throw err;
                    console.log('Deleted');
        });
});
console.log('connected');
server.listen(3000);
// End of code
*/
