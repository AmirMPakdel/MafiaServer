const io = require("../index");

class Timer{

    constructor(room_id){

        this.room_id = room_id;
        this.end = false;

        this.dayTime = 18000;
        this.courtTime = 12000;
        this.nightTime = 12000;
    }

    start(io){

        this.beDay(io,
            ()=>setTimeout(()=>this.beCourt(io,
                ()=>setTimeout(()=>this.beNight(io,
                    ()=>setTimeout(()=>this.start(io), this.nightTime)
                ),this.courtTime)
            ), this.dayTime)
        );
    }

    beDay(io, cb){
        
        if(!this.end){

            io.to(this.room_id).emit("itsDay");
            console.log("itsDay");
            cb();
        }
    }

    beCourt(io, cb){
        
        if(!this.end){

            io.to(this.room_id).emit("itsCourt");
            // give poeple options
            console.log("itsCourt");
            cb();
        }
    }

    beNight(io, cb){
        
        if(!this.end){
         
            io.to(this.room_id).emit("itsNight");
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