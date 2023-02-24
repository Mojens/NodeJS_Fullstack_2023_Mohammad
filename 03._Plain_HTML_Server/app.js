const express = require('express')
const app = express()

app.use(express.static('public'))

const tanks = [
  { name: 'Tiger I', country: 'Germany' },
  { name: 'Leopard', country: 'Germany' },
  { name: 'T-34', country: 'USSR' },
  { name: 'KV-1', country: 'USSR' },
  { name: 'M4 Sherman', country: 'USA' },
  { name: 'M26 Pershing', country: 'USA' },
  { name: 'Panther', country: 'Germany' }
]

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html' )
})


app.get('/api/tanks', (req, res) => {
  res.send({ data: tanks })
});




app.listen(8080, () => console.log('Listening on port 8080'))