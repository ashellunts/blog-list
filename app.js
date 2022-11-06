const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
require('dotenv').config()

const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl)
    .then(() => {
        console.log('connected to mongo')
    })
    .catch(() => {
        console.error('error connecting to mongo')
    })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app
