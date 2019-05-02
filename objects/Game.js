const Timer = require("./Timer");
const Gode = require("./God");

class Game{

    constructor(room_id){

        this.room_id = room_id;
        this.timer = new Timer(room_id);
    }

    start(io){

        Gode.giveRoles(io, this.room_id, ()=>{

            this.timer.start(io);
        });
    }
}

module.exports = Game;