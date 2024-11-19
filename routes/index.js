const express = require('express');
const { loginPageController, registerPageController, logoutPageController, frontPageController, showPageController } = require('../controllers/indexController');
const { isLoggedIn } = require('../middlewares/Authentication');
const route = express.Router();


route.post("/register",registerPageController)
route.post("/login", loginPageController)
route.post("/logout", logoutPageController)
route.post("/front",isLoggedIn ,frontPageController)//just to check the authentication is working 
route.get("/show",isLoggedIn ,showPageController)



module.exports = route;

