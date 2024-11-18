const express = require('express');
const route = express.Router();
const {group}=require("../controllers/gruopController")
route.get('/',group)

module.exports = route;