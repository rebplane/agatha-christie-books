const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')

const DESC = 'desc' // descending order
const ASC = 'asc' // ascending order
const ALPHA = 'alpha' // alphabetical order
const CHRON = 'chron' // chronological order (by year)

// @desc Get all books in the database
// @route GET /api/books
// @access Public
const getBooks = asyncHandler(async (req, res) => {
    // console.log(req.query)
    // order = req.query.order
    if (order) {
        console.log(order)
    }
    const books = await Book.find()
    res.status(200).json(books)
})

// @desc Get book information by id
// @route GET /api/books/:id
// @access Public
const getBookById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.status(200).json(book)
})

// Filter books by character
// Search book name
// Chronologically
// Alphabetically

module.exports = {
    getBooks,
    getBookById,
}