
class Timer{

    constructor(io, room){

        this.io = io;
        this.room = room;
        this.end = false;

        this.dayTime = 5000;
        this.courtTime = 5000;
        this.nightTime = 5000;  

        this.start();
    }

    start(){

        this.beDay(
            ()=>setTimeout(()=>this.beCourt(
                ()=>setTimeout(()=>this.beNight(
                    ()=>setTimeout(()=>this.start(), this.nightTime)
                ),this.courtTime)
            ), this.dayTime)
        );
    }

    beDay(cb){
        
        if(!this.end){

            this.io.to(this.room).emit("itsDay");
            console.log("itsDay");
            cb();
        }
    }

    beCourt(cb){
        
        if(!this.end){

            this.io.to(this.room).emit("itsCourt");
            // give poeple options
            console.log("itsCourt");
            cb();
        }
    }

    beNight(cb){
        
        if(!this.end){
         
            this.io.to(this.room).emit("itsNight");
            // give mafia options
            console.log("itsNight");
            cb();
        }
    }

    stop(){

        this.end = true;
    } 
}

module.exports = Timer;