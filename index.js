const express = require('express')
const app = express();
const mongoose = require('mongoose');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
const User = require('./models/user');
const Game = require('./objects/Game');
const Roles = require("./roles");

const RoomHandler = require('./handlers/RoomHandler');
const MessageHandler = require('./handlers/MessageHandler');
const GameHandler = require("./handlers/GameHandler");

mongoose.connect("mongodb://localhost/mafia", {useNewUrlParser: true});

app.get('/', (req, res)=>{

    res.send("Welcome To Mafia");
});


io.on('connection', (socket)=>{

    console.log('socket connected');

    socket.on("join", (data)=>{RoomHandler.JoinRoom(socket, data)});

    socket.on("send_message", (data)=>{MessageHandler(io, data)});

    socket.on("game", (data)=>{GameHandler.Controller(io, socket, data)});

    socket.on('disconnect', ()=>{console.log('socket disconnected')});
})

http.listen(port, ()=>{console.log("Server is Listening on port "+port)});
