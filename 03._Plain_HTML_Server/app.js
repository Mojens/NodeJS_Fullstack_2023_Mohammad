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

let visitorCount = 1;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html' )
})

app.get('/visitors', (req, res) => {
  res.sendFile(__dirname + '/public/visitors/visitors.html')
});


/* API */

/* Tanks */

app.get('/api/tanks', (req, res) => {
  res.send({ data: tanks })
});

/* Visitor */

app.get('/api/visitors', (req, res) => {
  res.send({ data: visitorCount })
});

app.put('/api/visitors', (req, res) => {
  res.send({ data: ++visitorCount })
})




app.listen(8080, () => console.log('Listening on port 8080'))