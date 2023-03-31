import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../06._svelte-family/dist")));

app.get("/", (req, res) => {
    
});


import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true,
}));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // True then it expects us to be on HTTPS
  }))


app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({ message: `Hi ${req.params.name}!`})
});

app.get("/gotham", (req, res) => {
    if (!req.session.name) {
        return res.send({ message: `I don't know you, get out of my city`})
    }
    res.send({ message: `I remember you ${req.session.name}!, you like ${req.session.hobby}`})
});

app.get("/leavegotham", (req, res) => {
    req.session.destroy(()=>{
        console.log("Session destroyed");
        res.send({ message: `You are no longer in Gotham`})
    });
});

app.get("/piblings", (req, res) => {
    res.send({ data: ["John","Mark"]})
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Something went wrong", error);
    }
    console.log("Server is running on port", PORT);
});