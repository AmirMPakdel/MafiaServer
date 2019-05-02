const Room = require("../models/room");

const Controller = (socket, data)=>{

    switch(data.cmd){

        case "vote":
        break;
        
        case "mafia_vote":
        break;

        case "my_role":
            // tell him what is his role
        break;

        case "heal":
        break;

        case "kill":
        break;

        case "shoot":
        break;

        case "spy_on":
        break;

        case "steal":
        break;
    }
}

const getRole = (req, res)=>{

    console.log(req.body);

    let room_id = req.body.room;
    let name = req.body.name;

    Room.findOne({_id:room_id}, (err, data)=>{

        if(data == null){

            console.log("room not found! "+err);
            
        }else{

            let role = null;

            data.players.forEach(element => {
                
                if(element.name == name){
                    role = element.role;
                }
            });

            if(role != null){

                res.status(200).send({role});
            }else{

                res.status(400).send({error:"player not found in room!"});
            }
        }
    })
}

module.exports = {Controller, getRole};