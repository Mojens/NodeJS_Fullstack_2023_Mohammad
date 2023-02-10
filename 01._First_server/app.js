const express = require("express")
const app = express();

app.use(express.json()); // this is a middleware

// Route (entire thing)
// HTTP method
//     Endpoint     Callback function 
app.get("/", (req, res) => {
    res.send({ message: "Our first route" });

});

let bicycleSpin = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpin+=1;
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpin} times` });
});

/* assignment
    create a new route that kicks the dinosaur
    and then the dinosaur says ow ow ow 
    */
let dinosaurKick = 0;
app.get("/kickthedinosaur", (req, res) => {
    dinosaurKick+=1;
    res.send({ message: `People have kicked the dinosaur ${dinosaurKick} times`,
    dinosaur: "ow ow ow" });
});

app.get("/about", (req, res) => {
    res.send(`
    <h1> About us </h1>
    <h2> We are a group of people who love dinosaurs!</h2>
    `);
});


// bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);

    res.send({ message: `The bat is ${req.query.adjective}`})
});

// bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ message: `The bottle is ${req.params.bottleSize}`});
});

app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body});
});


app.listen(8080); //open the port 8080 to use for our server 8080 beacuse its production and http