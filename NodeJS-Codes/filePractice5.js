var http = require('http');
var fs = require('fs');
var multipleObject = ('/multipleObject.js');


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
/*
// Creating multiple object using function
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.gym = true;
    this.pool = false;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay Hotel', 40, 25);

var ibisHotel = new Hotel('Ibis Hotel', 50, 30);

var detail1 = quayHotel.name;
elDetail1 = document.getElementById('detail1');
elDetail1.textContent = detail1;

var detail12 = quayHotel.checkAvailability() + " rooms";
elDetail12 = document.getElementById('detail12');
elDetail12.textContent = detail12;

quayHotel.gym = true;
var detail13 = quayHotel.gym;
if( detail13 === false ) {
    detail13 = ('&#x2715;');
} else {
    detail13 = '&#x2713;';
}
elDetail13 = document.getElementById('detail13');
elDetail13.innerHTML = 'Gym: ' + detail13;

quayHotel.pool = false;
var detail14 = quayHotel.pool;
if( detail14 === false ) {
    detail14 = ('&#x2715;');
} else {
    detail14 = '&#x2713;';
}
elDetail14 = document.getElementById('detail14');
elDetail14.innerHTML = 'Pool: ' + detail14;

var detail2 = ibisHotel.name;
elDetail2 = document.getElementById('detail2');
elDetail2.textContent = detail2;

var detail21 = ibisHotel.checkAvailability() + " rooms";
elDetail21 = document.getElementById('detail21');
elDetail21.textContent = detail21;

ibisHotel.gym = false;
var detail22 = ibisHotel.gym;
if( detail22 === false ) {
    detail22 = ('&#x2715;');
} else {
    detail22 = '&#x2713;';
}
elDetail22 = document.getElementById('detail22');
elDetail22.innerHTML = 'Gym: ' + detail22;

ibisHotel.pool = true;
var detail23 = ibisHotel.pool;
if( detail23 === false ) {
    detail23 = ('&#x2715;');
} else {
    detail23 = '&#x2713;';
}
elDetail23 = document.getElementById('detail23');
elDetail23.innerHTML = 'Pool: ' + detail23;
*/



