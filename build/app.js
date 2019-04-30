const path = require('path')
const express = require('express')
const app = express()

app.use('/css', express.static(path.join(__dirname, 'dist', 'css')))
app.use('/js', express.static(path.join(__dirname, 'dist', 'js')))

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'favicon.ico')))
app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'favicon.ico')))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))

const port = 3000
app.listen(port, () => {
  console.log('Listening on *:%d', port)
})