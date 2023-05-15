const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    Token: {
        type: String,
        unique: true,
    }
}, { timestamps: false })

module.exports = mongoose.model('RefreshToken', refreshTokenSchema, 'refreshTokens');