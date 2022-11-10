const express = require('express')
const router = express.Router()

const { register, login, logout, isLoggedIn } = require('../controllers/accountController')

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.post('/auth', isLoggedIn)

module.exports = router