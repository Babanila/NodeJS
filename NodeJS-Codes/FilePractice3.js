var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log('A request was made' + req.url);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        var myData = fs.createReadStream(__dirname + '/demo.html', 'utf8');
        myData.pipe(res);
        console.log('Connection created and connected');
});
server.listen(3000, '127.0.0.1');
// server.listen(8080);
// End of code




