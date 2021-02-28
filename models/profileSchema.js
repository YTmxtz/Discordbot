const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    UserID: { type: String, require: true, unique: true},
    serverID: {type: String, require: true},
    coins: {type: Number, default: 1000},
    bank: {type: Number}
})


module.exports = mongoose.model(`profileModel`, profileSchema);