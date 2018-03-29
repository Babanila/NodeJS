
var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('The current date and time is <br>' + dt.myDateTime() + '<br>');
        res.write('The Multiplication Table <br> ' + dt.myCalculator());
        res.end(' ');
}).listen(8080);



/*
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
      var userLink = url.parse(req.url, true);
      var fileName = "." + userLink.pathname;

      fs.readFile(fileName, function(err, data){
            if(err){
                res.writeHead(404, {'Content-Type' : 'text/html'});
                return res.end('Error in url');
            }
        else{
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
                return res.end();
        }
      });
}).listen(8080);

*/
