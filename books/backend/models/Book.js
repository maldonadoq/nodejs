const { Schema, model} = require('mongoose');

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    img_path: { type: String},
    create_at: { type: Date, default: Date.now}
});

module.exports = model('Book', BookSchema);
