import express from "express";
const app = express();

app.use(express.static("public")); // need this for making css and js work inside of the html files
app.use(express.urlencoded({ extended: true })); // need this for making req.body work with form from html


import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | Home"
});

const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle: "Upper | IRLQuests"
});

const contact = templateEngine.readPage("./public/pages/contact/contact.html")
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "Upper | Contact"
})


app.get("/", (req, res) => {
    // readFileSync is a blocking function, so it will wait for the file to be read before continuing
    // res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", async (req, res) => {
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage)
})

/* API */

app.post("/api/contact", (req, res) => {
    res.redirect("/")
});


console.log(process.env.PORT)

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${PORT}`);
});