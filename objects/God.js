const God = {

    giveRoles: (io, room_id)=>{

        // give the roles
        
        io.to(room_id).emit("roles_ready");
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