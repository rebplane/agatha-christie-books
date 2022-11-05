const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    uk_title: {
        type: String,
        required: true
    }, 
    us_title: {
        type: String,
        required: false
    },
    year: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)