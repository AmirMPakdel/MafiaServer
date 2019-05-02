const Room = require("../models/room");

const God = {

    giveRoles: async (io, room_id, cb)=>{

        // give the roles

        let room = await Room.findOne({_id:room_id});

        let players = room.players;

        players = giveRolesToPlayers(players);

        room.players = players;

        await room.save();
        
        io.to(room_id).emit("roles_ready");

        cb();
    },

    gameEndCheck: (io, room_id, gameObj)=>{

        // if end
        God.tellStory(io, room_id, gameObj);

        return true;
    },

    tellStory: (io, room_id, gameObj)=>{

        io.to(room_id).emit("story", {});
    },

    giveXP: (io, room_id)=>{

        // count xp and save it to db and send it

        io.to(room_id).emit("xp", {});
    }
}

function giveRolesToPlayers(players){

    let roles = ["mfa", "plc", "thf", "gdf", "snp"]

    players.forEach(element => {
        
        let random = getRandomInt(roles.length);

        element.role = roles[random];

        roles.splice(random, 1); // removing the index
    });

    return players;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = God;