const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')
const User = require('../models/userModel')

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

// @desc Add a book to the user's read list
// @route PUT /api/books/add
// @access Private
const postReadBooks = asyncHandler(async(req, res) => {
    // Check if the user is authenticated first
    if (req.user) {
        const book = await Book.findById(req.body.book_id)
        var user = await User.findById(req.user.id)

        user.booksRead.pull(book._id)
        user.booksRead.push(book._id)
        user.save()
        res.status(201).json({message: "Added new book"})
    } 
    else {
        res.status(403).json({message: "Not logged in"})
    }
})

// @desc Remove a book from the user's read list
// @route PUT /api/books/remove
// @access Private
const removeReadBooks = asyncHandler(async(req, res) => {
    // Check if the user is authenticated first
    if (req.user) {
        const book = await Book.findById(req.body.book_id)
        var user = await User.findById(req.user.id)

        user.booksRead.pull(book._id)
        user.save()
        res.status(201).json({message: "Removed book"})
    } 
    else {
        res.status(403).json({message: "Not logged in"})
    }
})

// @desc Get a user's read books
// @route GET /api/books/read/:username
// @access Public
const getReadBooks = asyncHandler(async(req, res) => {
    var user = await User.findOne({ username: req.params.username })
    var books = await Book.find({"_id": {$in: user.booksRead}})
    res.status(200).json(books)
})

// @desc Get a user's unread books
// @route GET /api/books/unread/:username
// @access Public
const getUnreadBooks = asyncHandler(async(req, res) => {
    var user = await User.findOne({ username: req.params.username })
    var books = await Book.find({"_id": {$nin: user.booksRead}})
    res.status(200).json(books)

})
module.exports = {
    getBooks,
    getBookById,
    postReadBooks,
    removeReadBooks,
    getReadBooks,
    getUnreadBooks
}