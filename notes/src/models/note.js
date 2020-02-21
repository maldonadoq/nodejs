const { Schema, model } = require('mongoose');

const NoteScheme = new Schema({
    title = {
        type: String,
        required: true
    },
    description = {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = model('Note', NoteScheme);