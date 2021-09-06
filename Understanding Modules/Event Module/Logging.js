const EventEmitter = require('events');
const emitter = new EventEmitter();


// Register the Login Event 
emitter.on('Logging',(arg) =>{
    console.log("Logging Data Was Submitted : ", arg);
})

emitter.emit('Logging',{id: 1, Place: 'Home', Url: 'http://localhost', When:'Now'})