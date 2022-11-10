const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: false,
        unique: true
    },
    booksRead: {
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

const passportLocalMongoose = require("passport-local-mongoose")
userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)