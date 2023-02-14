const { Schema, model } = require('mongoose');
const Category = require('./Category');

const songsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
    },
    album: {
        type: String,
    },
    video: {
        type: String,
    },
    category: {
        type: String
    }
});

const Songs = model('Songs', songsSchema);

module.exports = Songs;





