var fs = require('fs');


var file = fs.writeFile('file1.txt', 'You are loved', function(){
     console.log('File created');
    });



fs.mkdir('stuff', function(){
    fs.readFile('file1.txt','utf8', function(err, data){
            fs.writeFile('./stuff/file2.txt', data, function(){
                console.log('File created and data copied');
           });
    });
});

/*
fs.unlink('./demo.txt', function(){});
fs.unlink('./stuff/file1.txt', function(){
        fs.rmdir('stuff', function(){
            console.log('Folder removed');
        });
});

console.log(__dirname);
console.log(__filename);

*/