require('dotenv').config()

const mongoose = require('mongoose')

function connect() {
    const mongoUrl = process.env.MONGO_URL
    mongoose
        .connect(mongoUrl)
        .then(() => {
            console.log('connected to mongo')
        })
        .catch(() => {
            console.error('error connecting to mongo')
        })
}

module.exports = { connect }
