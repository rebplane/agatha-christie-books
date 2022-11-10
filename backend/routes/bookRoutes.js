const express = require('express')
const router = express.Router()
const { getBooks, getBookById, postReadBooks, removeReadBooks, getReadBooks, getUnreadBooks } = require('../controllers/bookController')

router.get('/', getBooks)

router.get('/info/:id', getBookById)

router.put('/add', postReadBooks)

router.put('/remove', removeReadBooks)

router.get('/read/:username', getReadBooks)

router.get('/unread/:username', getUnreadBooks)

module.exports = router