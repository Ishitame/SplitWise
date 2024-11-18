const express = require('express');
const route = express.Router();
route.get('/',(req,res)=>{
    res.send("I AM JOOHI!!!")
})
module.exports = route;