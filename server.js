// dependencies
const express = require('express')
const path = require('path')
const notes = require('./db/db.json')
const fs = require('fs')

// PORT
const PORT = process.env.PORT || 3001

// express
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/api/notes', function (req, res) {
  return res.json(notes)
})

app.post('/api/notes', function (req, res) {
  const newNote = req.body
  newNote['id'] = currentID + 1
  currentID ++
  console.log(newNote)
  notes.push(newNote)

  newNote()
})

app.delete('api/notes/:id', function (req, res) {
  const id = req.params.id
  const idLess = note.filter(function(less) {
    return less.id < id
  })
  
})
// app.use('/api', api)
// app.use(express.static('public'))

// require('./routers/index')
// require('./routers/htmlnotes')

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

// app.get('/notes', (req, res) => 
// res.sendFile(path.join(__dirname, './public/index.html'))
// )

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// )

// app.listen(PORT, () => {
//   console.log(`Listening at http://localhost:${PORT}`)
// })
