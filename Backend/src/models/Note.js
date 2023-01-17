const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
    title: String,
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        maxLength: 750
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

module.exports = model('notes', notesSchema);