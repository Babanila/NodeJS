var events = require ('events');
var myModule = require ('./myFirstModule');

var createdEmitter  = new events.EventEmitter();

createdEmitter.on('doing', function(msg){
    console.log(msg);
});

createdEmitter.emit('doing', 'I am playing football');

createdEmitter.emit('doing', 'What are you doing ?');

createdEmitter.emit('doing', "I'm learning a program");
createdEmitter.emit('doing', myModule.myDateTime());


/*var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = function(){
        console.log('I hear a sound');
    }

    eventEmitter.on('scream', myEventHandler);// Attach to an event
    eventEmitter.emit('scream'); // Fire the scream

*/


