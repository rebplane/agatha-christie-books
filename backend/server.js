const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT  || 5000
const connectDB = require('./config/db')
const bodyParser = require('body-parser')

connectDB()

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/books', require('./routes/bookRoutes'))
app.use('/api/accounts', require('./routes/accountRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))