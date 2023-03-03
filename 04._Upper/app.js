import express from "express";
//const express = impoty ("express");
const app = express();
const PORT = 8080;

//import jokes from "./util/jokes.js";











app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server started on port ${PORT}`);
});