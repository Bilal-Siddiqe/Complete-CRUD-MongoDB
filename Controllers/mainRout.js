const express = require("express");
const mainRoute = express.Router();


mainRoute.get("/", (req, res) => {
   res.send("Router get is working from main");
});

mainRoute.post("/", (req, res) => {
    res.send("Router post is working from main");
});


module.exports = mainRoute;