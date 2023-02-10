const express = require("express")
const app = express();

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
    dinosaur: "ow ow ow" 
});
});




app.listen(8080); //open the port 8080 to use for our server 8080 beacuse its production and http