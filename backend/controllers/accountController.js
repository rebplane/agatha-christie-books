const asyncHandler = require('express-async-handler')
const passport = require('passport')
const User = require('../models/userModel')

// @desc Registers the user
// @route GET /api/accounts/register
// @access Public
const register = asyncHandler(async (req, res) => {
    const newUser = new User({
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
    })

    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.status(400).json({message: "Username or email already exists"})
        } else {
            passport.authenticate("local")(req, res, function() {
                res.status(200).json({message:"Successfully registered user", user: req.body.username})
            });
        }
    })
})

// @desc Logs in the user
// @route POST /api/accounts/login
// @access Public
const login = asyncHandler(async (req, res) => {
    email = await User.find({username: {$eq: req.body.username}})
    email = email[0]['email']
    
    const newUser = new User({
        username: req.body.username.toLowerCase(),
        email: email
    })

    req.login(newUser, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.status(200).json({message:"Successfully logged in user", user: req.body.username})
            });
        }
    })
})

// @desc Logs out the user
// @route POST /api/accounts/logout
// @access Public
const logout = asyncHandler(async (req, res) => {
    req.logout(function(err) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({message: "Successfully logged out user"})
        }
    });
})

// @desc Checks if user is authenticated
// @route POST /api/accounts/auth
// @access Public
const isLoggedIn = asyncHandler(async (req, res) => {
    if (req.user) {
        res.status(200).json({username: req.user['username']})
    } else{
        res.status(403).json({message: "Not logged in"})
    }
})


module.exports = {
    register,
    login,
    logout,
    isLoggedIn
}