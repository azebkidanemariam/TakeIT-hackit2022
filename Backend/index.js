// const fs = require("fs/promises");
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cors = require("cors");
require("dotenv/config");
const db = process.env.DB;
const app = express();

// middlewares that runs when all routes are used, in this case a json parser
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const imagesRouter = require("./routes/images");
const usersRouter = require("./routes/users");

app.use("/images", imagesRouter);
app.use("/users", usersRouter);


// connecting to the database
mongoose.connect("mongodb+srv://patrik1:showmethemoney1@cluster0.locs6ta.mongodb.net/photoBoothDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// console.log(mongoose.connection.readyState);
.then(() => console.log("connected to the database"))
.catch( error => console.log(error));

app.listen(3000, () => console.log("Server is running"));