const express = require('express');
const { ExpensesCreate } = require('../controllers/expenseController');
const route = express.Router();

route.get("/:id", ExpensesCreate)


module.exports = route;