const express = require('express');
const app = express();
const path = require('path');

const db=require("./config/mongoConfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require("./routes/index");
const groupRouter = require("./routes/group");
const expenseRouter = require("./routes/expenses");


app.use("/",indexRouter);
app.use("/profile",groupRouter);
app.use("/group/",expenseRouter);





app.listen(3000, () => {
    console.log('Server running on port 3000');
});