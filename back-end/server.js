// const mongoose = require("mongoose");
const express = require('express');
const app = express();
const { APP_PORT } = require('./config/index');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

// mongoose.connect('mongodb+srv://thv:Bhavesh2407@cluster0.9hocf7f.mongodb.net/test')
// .then(() => {

// console.log("connected to mongoDB");
app.use(express.json());
app.use('/browse', routes);

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
    // })
    // .catch((err) => console.error("Could not connect to MongoDB..."));
