const io = require('socket.io-client');


const s =io.connect("http://localhost:3000");

s.on('connect', ()=>{

    console.log("asdasd");
    
})