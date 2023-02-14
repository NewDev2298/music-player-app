const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    description: {
        type: String,
    },
    songs: {
        type: String,
        ref: 'Songs'
    }
});


const Category = model('Category', categorySchema);

module.exports = Category;