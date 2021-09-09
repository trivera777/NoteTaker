const express = require('express');
const path = require('path');
const fs = require('fs')
// const routes = require('.//public/assets/routes')
const termData = require('../../../db/db.json')

const PORT = process.env.PORT || 3001

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/api/notes', (req, res) => res.json(termData))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
