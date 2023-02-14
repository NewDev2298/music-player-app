const { Schema, model } = require('mongoose');

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
    }
});

const Songs = model('Songs', songsSchema);

module.exports = Songs;





