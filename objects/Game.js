const Timer = require("./Timer");

class Game{

    constructor(io, room){

        this.timer = new Timer(io, room);
        this.timer.start();
    }
}

module.exports = Game;