const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Alice');

emitter.once('once_event', () => {
  console.log('This will run only once.');
});

emitter.emit('once_event');
emitter.emit('once_event'); 