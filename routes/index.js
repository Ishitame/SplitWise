const express = require('express');
const route = express.Router();

route.get("/", function(req, res){
    res.send("Hello, this is the Group page");
})


module.exports = route;

