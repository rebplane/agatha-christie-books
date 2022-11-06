const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    read: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Book'
        }],
        required: false,
        default: []
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)