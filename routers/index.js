const express = require('express')
const router = require('./htmlnotes.js')

const app = express()

app.use('/htmlnotes.js', router)

module.exports = app