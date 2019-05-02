const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    noe : {type: 'number', default:0},
    players : {type: 'array', default:[]}
});

const Room = mongoose.model('Room', schema);

module.exports = Room;