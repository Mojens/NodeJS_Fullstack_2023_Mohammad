import db from "./connection.js"


db.shops.updateOne({ city: "Hellerup" }, { $push: {shops: {name: "Jem & Fix"} } })
db.shops.updateOne({ city: "Hellerup" }, { $set: {rating: 2} })