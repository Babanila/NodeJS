// Creating a readable stream that wait for user request
const Readable = require('stream').Readable

const myStreamData = Readable();

let alpChar = 96;

myStreamData._read = function(){
            if( alpChar >= 'z'.charCodeAt(0)) return myStreamData.push(null);

            setTimeout(function(){
                myStreamData.push(String.fromCharCode(++alpChar));
            }, 100);
}

myStreamData.pipe(process.stdout);

 process.on('exit', function(){
    console.error('\n_read() called ' + (alpChar - 97) + ' times\n'); //  \n for new line

 });

process.stdout.on('error', process.exit)
