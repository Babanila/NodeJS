/*
// showing how to get the url location
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Return the url part of the request object:
    res.write(req.url);
}).listen(8080);
// end of code


// Showing how to query url request
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.end(txt);
}).listen(8080);
//end of code


// Showing how to read file using fs
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
        fs.readFile('demo.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
// End of code


// Showing how to append file using fs (using for adding to the previous data)
var fs = require('fs');
        fs.appendFile('demo1.html', 'I am New to this ', function(err){
            if(err) throw err;
            console.log('Saved!'); // can also be updated
        });
// End of code


// Showing how to write file using fs (use to create new or to replace the content of a file)
var fs = require('fs');
fs.writeFile('demo2.html', 'I am New to this ', function(err){
    if(err) throw err;
    console.log('Saved!'); // can also be Updated
});
// End of code


// Showing how to open file using fs
var fs = require('fs');
fs.open('demo3.html', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved!');
});
// End of code


// Showing how to delete file using fs
var fs = require('fs');
        fs.unlink('demo3.html', function(err){
            if(err) throw err;
            console.log('Deleted');
        });
// End of code


// Showing how to delete file using fs
var fs = require('fs');
fs.rename('demo2.html', 'demorenamed.html', function(err){
    if(err) throw err;
    console.log('Renamed');
});
// End of code
*/


// Showing how to use Upper Case function
var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(uc('Hello World'));
    res.end();
}).listen(8080);
// End of code


