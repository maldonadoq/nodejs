const mongoose = require('mongoose');

const { NOTE_MONGODB_HOST, NOTE_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${NOTE_MONGODB_HOST}/${NOTE_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Db is connected"))
    .catch(err => console.error(err));
