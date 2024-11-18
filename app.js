const express = require('express');
const app = express();
const path = require('path');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require("./routes/index");
const groupRouter = require("./routes/group")


app.use("/",indexRouter);
app.use("/profile",groupRouter);




app.listen(3000, () => {
    console.log('Server running on port 3000');
});