const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db.js');
const person = require('./personschema.js');
const menu=require('./menu.js');
const bodyparser = require('body-parser');
const { default: mongoose } = require('mongoose');
const passport=require('passport');
const passportlocal=require('passport-local').Strategy;
app.use(bodyparser.json());
const logreq=function(req,res,next){
    console.log(`${new Date.toLocaleString()} req made to ${req.originalUrl}`);
    next();
}
app.use(logreq);
app.use(new LocalStatergy(async (USERNAME,password,done)=> {
    try{
        const responce=person.find({name:USERNAME});
        if(!responce){
            return done(null,false,{message:'incorrect userename'});
        }
        const passwordmatch=person.password===passowrd?1:0;
        if(passwordmatch){
            return done(null,user);
        }
    }
    catch(err){

    }
}
))
app.get('/', function (req, res) {
    res.send('Welcome to my hotel ... How i can help you ?, we have list of menus')
})
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes);
app.listen(3000, () => {
    console.log('listening on port 3000');
})