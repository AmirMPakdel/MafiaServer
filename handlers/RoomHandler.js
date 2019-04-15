const Room = require('../models/room');

const MAX_NOE = 2;

async function JoinRoom (socket , data){

    console.log("join");
    
    let rooms = await Room.find();

    let the_room = null;

    rooms.forEach(r=>{

        if(r.noe != MAX_NOE){

            the_room = r;
        }
    });

    if(the_room == null){

        the_room = new Room();
    }

    the_room.noe +=1;

    the_room.save();

    console.log("joinning");
    
    socket.join(the_room._id.toString(), ()=>{
        
        socket.emit("join_r", {room:the_room._id.toString()});
        
    });
}

module.exports = {JoinRoom}