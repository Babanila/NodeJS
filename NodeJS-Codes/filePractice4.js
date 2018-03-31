// Code to show how to get/pass JSON file to the web-browser
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'});

    var myObject = {
        name: 'Babanila',
        profession: 'Programmer/Developer',
        age: 30
    }
            res.end(JSON.stringify(myObject));
});
    server.listen(8080);