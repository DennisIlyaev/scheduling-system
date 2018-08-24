const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfo = new Schema({
    firstname: String,
    lastname: String,
    phone: Number
});

module.exports = mongoose.model('userDetails', userInfo, 'users');