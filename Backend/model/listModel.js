const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: {
        type: Number
    },
    content: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Lists', schema); 
module.exports = model;
