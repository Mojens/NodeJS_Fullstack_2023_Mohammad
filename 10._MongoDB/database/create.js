import db from "./connection.js";

db.gummyBears.insertOne({ color: "green", flavor: "apple" });
db.shops.insertOne({ city: "Roskilde", shops: ["Bilka", "Føtex"] });
