var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('Public'));

/*
// For getting ordinary text/message to the browser
app.get('/', function(req, res){
    res.send('This is home page');
});

// For getting HTML pages
app.get('/home', function(req, res){
        res.sendFile(__dirname + '/home.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});


app.get('/profile/:name', function(req, res){
    res.send('You are welcome ' + req.params.name);
});
*/

//For getting HTML pages
    app.get('/', function(req, res){
        res.render('index');
});

    app.get('/contact', function(req, res){
        res.render('contact');
    });


app.get('/profile/:name', function(req, res){
       var details = {age:30, profession:'student', hobbies: ['Dancing', 'Singing', 'Traveling' ]};
        res.render('profile', {person: req.params.name, data: details});

});

app.listen(3000);