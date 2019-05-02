const Room = require('../models/room');
const Game = require('../objects/Game');


const MAX_NOE = 2;

async function JoinRoom (io, socket ,gamesPool,  data){
    
    let rooms = await Room.find();

    let the_room = null;

    rooms.forEach(r=>{

        if(r.noe != MAX_NOE){

            the_room = r;
        }
    });

    if(true/*the_room == null*/){

        the_room = new Room();

        console.log(the_room._id.toString());
        

        let newGame = new Game(the_room._id.toString());

        gamesPool.set(the_room._id.toString(), newGame);
    }

    the_room.noe +=1;

    the_room.players.push({/*name:data.name*/name:"amir", role:""});

    the_room.save();
    
    socket.join(the_room._id.toString(), ()=>{
        
        socket.emit("join_r", {room:the_room._id.toString()});

        console.log("game is starting ->"+the_room._id.toString());
        
        // starting the game
        gamesPool.get(the_room._id.toString()).start(io);

    });
}

module.exports = {JoinRoom}