const express = require('express')
const path = require('path')

//
const api = require('./routers/index')

const PORT = process.env.PORT || 3001

const app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', api)
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, './public/index.html'))
)

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
