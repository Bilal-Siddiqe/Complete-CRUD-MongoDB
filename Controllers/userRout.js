const express = require("express");
const userRoute = express.Router();


userRoute.get("/user", (req, res) => {
   res.send("Router get is working from user");
});

userRoute.post("/user", (req, res) => {
    res.send("Router post is working from user");
});


module.exports = userRoute;