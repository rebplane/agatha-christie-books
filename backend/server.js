const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT  || 5000
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require("passport")

const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

var jsonParser = bodyParser.json()

connectDB()

const User = require('./models/userModel')

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/accounts', jsonParser, require('./routes/accountRoutes'))
app.use('/api/books', jsonParser, require('./routes/bookRoutes'))

// Serve frontend
if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}

app.listen(port, () => console.log(`Server started on port ${port}`))