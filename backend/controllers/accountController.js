const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Registers the user
// @route GET /api/accounts/register
// @access Public
const register = asyncHandler(async (req, res) => {
    console.log(req.body)
    res.status(200).json({message: "test"})
})

// @desc Logs in the user
// @route POST /api/accounts/login
// @access Public
const login = asyncHandler(async (req, res) => {
    res.status(200).json({message: "test"})
})

// @desc Logs out the user
// @route POST /api/accounts/logout
// @access Public
const logout = asyncHandler(async (req, res) => {
    res.status(200).json({message: "test"})
})

module.exports = {
    register,
    login,
    logout
}