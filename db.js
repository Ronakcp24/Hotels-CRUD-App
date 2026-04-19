const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/mydb' // Replace 'mydatabase' with your database name

// Set up MongoDB connection
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("connected");
})
db.on('disconnected',()=>{
    console.log("connected");
})
module.exports=db;