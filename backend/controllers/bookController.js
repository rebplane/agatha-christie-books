const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')

const DESC = 'desc'
const ASC = 'asc'
const YEAR = 'year' // alphabetical order
const TITLE = 'uk_title' // chronological order (by year)

// @desc Get all books in the database
// @route GET /api/books
// @access Public
const getBooks = asyncHandler(async (req, res) => {
    orderby = req.query.orderby || ASC
    ordertype = req.query.ordertype || YEAR

    const books = await Book.find().sort({ [ordertype] : orderby })
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