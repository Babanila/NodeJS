var http = require('http');
var fs = require('fs');


/*
// Reading of file using Stream
var myDataStream = fs.createReadStream(__dirname + '/file3.txt', 'utf8');

myDataStream.on('data', function(chunk){
            console.log('New Data received \n\n');
            console.log(chunk);
});


// Writing of file from data received using Stream
var myDataStream = fs.createReadStream(__dirname + '/file3.txt', 'utf8');
        var myWriteData = fs.createWriteStream(__dirname + '/fileWrite.txt');
    myWriteData.write('This text is long, please relax to read \n\n\n\n');
        myDataStream.on('data', function(chunk){
                console.log('New Data received \n\n');
            myWriteData.write(chunk);
});
*/

// Using Pipe to do what is done above
var myDataStream = fs.createReadStream(__dirname + '/file3.txt', 'utf8');
var myWriteData = fs.createWriteStream(__dirname + '/fileWrite.txt');
        myDataStream.pipe(myWriteData);
