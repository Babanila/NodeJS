var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
        if(req.url === '/home' || req.url === '/'){
                res.writeHead(200, {'Content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/home.html').pipe(res);
        }

        else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
        }
        else {
            console.log(req.url);
        }
});
    server.listen(3000, '127.0.0.1');
//"/Users/becky/Documents/GitHub/JS-Codes/add-content.js"