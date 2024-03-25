const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Lists', schema); 
module.exports = model;
