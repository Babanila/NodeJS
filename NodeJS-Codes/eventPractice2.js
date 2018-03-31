var events = require ('events');
var util = require ('util');


var Person = function(name){
        this.name = name;
};

util.inherits(Person, events.EventEmitter);


var Ibrahim = new Person('Ibrahim');
var Deji = new Person('Deji');
var Solomon = new Person('Solomon');

var people = [Ibrahim, Deji, Solomon];

people.forEach(function(person){
        person.on('speak', function(mssg){
                console.log(person.name + ' said: ' + mssg);
        });
});

Deji.emit('speak', 'I want to eat');
Ibrahim.emit('speak', 'I want to sleep');

//console.log(people);
