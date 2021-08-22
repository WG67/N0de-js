const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();


//handle
eventEmitter.on('lunch', () => {
    
    console.log('yum');

});

eventEmitter.emit('lunch');
eventEmitter.emit('lunch');