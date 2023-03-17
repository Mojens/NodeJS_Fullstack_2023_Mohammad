import express from "express";
import path from "path";
const app = express();
const PORT = 8080;

app.use(express.static("public")); // need this for making css and js work inside of the html files

// import jokes from "./util/jokes.js";

import fs from "fs";
// Components
const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();


// Pages
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const IRLQuests = fs.readFileSync("./public/pages/IRLQuests/IRLQuests.html").toString();
const jokes = fs.readFileSync("./public/pages/jokes/jokes.html").toString();

// Constructed pages    
const frontpagePage = navbar + frontpage + footer;
const IRLQuestsPage = navbar + IRLQuests + footer;
const jokesPage = navbar + jokes + footer;

app.get("/", (req, res) => {    
    // readFileSync is a blocking function, so it will wait for the file to be read before continuing
    // res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req,res) =>{
    res.send(jokesPage);
});









app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${PORT}`);
});