/*
 * Title: events module
 * Description: this file is about to demonstrate the use of the event module in node.js
 * Author: Sandor Deli
 * logic: 
 *
 */

/*HANDLING EVENTS*/
const events = require('events');

// create the event Emitter
// eventemitter has originally 0 events on it
const evEmitter = new events.EventEmitter();

(function createNewEventsAndListen() {
// register an Event
    evEmitter.on('customEventWithMoreParams', function(msg1, msg2, msg3){
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
    });

    let msgsArr = ['msg1', 'msg2', 'msg3', 'msg4']
    evEmitter.emit('customEventWithMoreParams', msgsArr[0], msgsArr[1], msgsArr[2]);
});

(function makeAnObjListenToEvents() {
    function Person(name){
        this.name = name;
        events.EventEmitter.call(this);
    }

    Person.prototype = Object.assign(Person.prototype, events.EventEmitter.prototype)

    let july = new Person('July')

    july.on('sayName', function() {
        console.log(this.name);
    })

    july.emit('sayName');
})();