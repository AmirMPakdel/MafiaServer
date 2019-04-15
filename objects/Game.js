const Timer = require("./Timer");

class Game{

    constructor(io, room){

        this.timer = new Timer(io, room);
    }
}

module.exports = Game;