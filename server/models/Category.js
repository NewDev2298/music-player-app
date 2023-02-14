const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Songs'
    },
],
});


const Category = model('Category', categorySchema);

module.exports = Category;