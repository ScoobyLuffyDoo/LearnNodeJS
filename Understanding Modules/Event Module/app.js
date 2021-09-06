const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener needs to be registered before it has been emitted

// register a listeners for the events emitted
// arg is just a name for the parameter 
emitter.on('messageLogged',(arg)=>{
    console.log('Listener Logged ' , arg);
})

// raised an event 
emitter.emit('messageLogged',{id: 1, url: 'http://localhost'});



//