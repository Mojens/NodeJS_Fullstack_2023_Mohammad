const express = require('express')
const app = express()

app.use(express.static('public'))

const { getTanks, addTank } = require("./util/tanks.js")
console.log(getTanks())

let visitorCount = 1;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
  res.sendFile(__dirname + '/public/tanks/tanks.html')
})

app.get('/visitors', (req, res) => {
  res.sendFile(__dirname + '/public/visitors/visitors.html')
});

app.get('/museumGuards', (req, res) => {
  res.sendFile(__dirname + '/public/museumGuards/museumGuards.html')
});



/* API */

/* Tanks */

app.get('/api/tanks', (req, res) => {
  res.send({ data: getTanks() })
});

/* Visitor */

app.get('/api/visitors', (req, res) => {
  res.send({ data: visitorCount })
});

app.put('/api/visitors', (req, res) => {
  res.send({ data: ++visitorCount })
});

app.get("/api/guards", (req, res) => {
  if (req.query.passport === "theskyisblue") {
    return res.redirect("/api/tanks")
  }
  res.send({ error: "You are not allowed to enter the museum" })

});



app.listen(8080, () => console.log('Listening on port 8080'))