const { Schema, model } = require('mongoose');

const userScheme = new Schema({
    firstName: String,
    lastName: String,
    avatar: String
});

module.exports = model('User', userScheme);