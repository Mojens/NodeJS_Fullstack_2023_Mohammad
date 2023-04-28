import db from "./connection.js";

const foundShops = await db.shops.find().toArray();
console.log("Found shops: \n",foundShops)

const foundGummyBears = await db.gummyBears.find().toArray();
// console.log("Found gummy bears: \n",foundGummyBears)

const foundCandyTypes = await db.candyTypes.find().toArray();
// console.log("Found candy types: \n",foundCandyTypes)