'use strict'
// //Import the mongoose module
// const mongoose = require('mongoose');

// //Set up default mongoose connection
// const mongoDB = 'mongodb://localhost:27017/yes';
// mongoose.createConnection(mongoDB, { useNewUrlParser: true });
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongo-test", {useNewUrlParser: true})
.then(() => console.log("mongodb connection success"))
.catch(err => console.log(err));