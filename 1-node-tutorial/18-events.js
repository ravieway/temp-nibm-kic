const EventEmitter = require('events')

const  testEmitter = new EventEmitter()

testEmitter.on('response', (name,age)=>{
   console.log(`Data recieved ${name} and age: ${age}`)
})

testEmitter.on('response', ()=>{
   console.log(`New user input received`)
})

testEmitter.emit('response','john',57)