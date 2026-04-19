require('dotenv').config();
const dns = require('dns');

// Force working DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');

// Define the MongoDB connection URL
//done for sure
const mongoURL=process.env.mongo_url_local;
 // Replace 'mydatabase' with your database name
//const mongoURL=process.env.mongo_url;
// Set up MongoDB connection
mongoose.connect(mongoURL);
const db=mongoose.connection;
// db.on('connected',()=>{
//     console.log("connected");
// })
// db.on('disconnected',()=>{
//     console.log("connected");
// })
module.exports=db;