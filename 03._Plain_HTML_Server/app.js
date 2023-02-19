const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html' )
})

app.listen(8080, () => console.log('Listening on port 8080'))