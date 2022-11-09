const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT  || 5000
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require("passport")

const app = express()

app.use(session({
    secret: "3DET5l!U#ewjmDKRnKwzjTjPodGYS7",
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

app.listen(port, () => console.log(`Server started on port ${port}`))