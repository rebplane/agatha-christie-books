const express = require('express')
const router = express.Router()
const { getBooks, getBookById, postReadBooks, removeReadBooks, getReadBooks, getUnreadBooks } = require('../controllers/bookController')

router.get('/', getBooks)

router.get('/info/:id', getBookById)

router.put('/add', postReadBooks)

router.delete('/remove', removeReadBooks)

router.get('/books/read/:username', getReadBooks)

router.get('/books/unread/:username', getUnreadBooks)

module.exports = router