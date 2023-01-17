const { Schema, model} = require('mongo');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('user', userSchema);