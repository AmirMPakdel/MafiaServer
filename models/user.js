const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    name: 'string',

    room: 'number' 

});

const User = mongoose.model('User', schema);

module.exports = User;