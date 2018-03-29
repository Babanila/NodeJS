var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create event handler
var myEventHandler = function(){
        console.log('I hear a sound');
    }

    eventEmitter.on('scream', myEventHandler);// Attach to an event
    eventEmitter.emit('scream'); // Fire the scream