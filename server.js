// dependencies
const express = require('express')
// const path = require('path')
const dataBase = require('./db/db.json')
const fs = require('fs')
const routes = require('./api/htmlroutes')
const uuid = require('./helpers/uuid')

// PORT
const PORT = process.env.PORT || 3001

// express
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'));
app.use(routes);

require('./api/apiroute')
require('./api/htmlroutes')

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
  if (err) console.error(err)
})

