const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: false,
    },
//     songs: [{
//         type: String,
//         ref: 'Songs'
//     },
// ],
});


const Category = model('Category', categorySchema);

module.exports = Category;