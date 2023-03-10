import express from "express";
import path from "path";
const app = express();
const PORT = 8080;

app.use(express.static("public")); // need this for making css and js work inside of the html files


app.get("/", (req, res) => {    
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
});

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
});









app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${PORT}`);
});