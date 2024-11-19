const express = require('express');
const route = express.Router();
const {group, creategroupPageController}=require("../controllers/groupController");
const { isLoggedIn } = require('../middlewares/Authentication');

route.post("/create",isLoggedIn,creategroupPageController)



module.exports = route;