import express from "express";
import path from "path";
const app = express();
const PORT = 8080;

app.use(express.static("public")); // need this for making css and js work inside of the html files

// import jokes from "./util/jokes.js";

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, { 
    tabTitle: "Upper | Home" 
});

const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, { 
    tabTitle: "Upper | IRLQuests" 
});

const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html");
const jokesPage = templateEngine.renderPage(jokes, { 
    tabTitle: "Upper | Jokes",
    cssLink: `<link href="/pages/jokes/jokes.css" rel="stylesheet">`
});


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