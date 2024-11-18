const express = require('express');
const { loginPageController } = require('../controllers/indexController');
const route = express.Router();

route.get("/", loginPageController)


module.exports = route;

