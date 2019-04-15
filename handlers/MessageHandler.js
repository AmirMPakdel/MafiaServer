
let SendMessage = (io, data)=>{ // data-> name, message, room

    let {name, room, message} = data;

    io.to(room).emit("message_r", {name, message});

    console.log(data);
}

module.exports = SendMessage;