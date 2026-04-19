const express = require('express')
const app = express();
const db = require('./db.js');
const person = require('./personschema.js');
const menu=require('./menu.js');
const bodyparser = require('body-parser');
const { default: mongoose } = require('mongoose');
app.use(bodyparser.json());
app.get('/', function (req, res) {
    res.send('Welcome to my hotel ... How i can help you ?, we have list of menus')
})
// app.post('/save',async function (req, res) {
//     try {
//        const data = req.body; // Use 'data' to match your assignments below

//         // Use the model you imported (person) to create a new instance
//         const newPerson = new person(data); 

//         // Save to database
//         const response = await newPerson.save();
//         console.log("Data saved successfully");
//         res.status(200).json(response);
//     }
//     catch (err) {
//         res.status(500).json({error:'internal server error'});
//     }
// })
// app.get('/menu',async function(req,res){
//     try{
//         const allItems=await menu.find();
//         res.status(200).json(allItems);
//     }
//     catch(err){
//         res.status(500).json({ message: "Error fetching items", err });
//     }
// })
app.post('/menuadd',async function(req,res){
    try{
        const data=req.body;
        const newItem=new menu(data);
        const response = await newItem.save();
        console.log("Data saved successfully");
        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({ message: "Error fetching items", err });
    }
})
// app.get('/person/:worktype',async function(req,res){
//     try{
//         const worktyepe=req.params.worktype;
//         if(worktyepe=='chef'||worktyepe=='manager'||worktyepe=='waiter'){
//             const data=await person.find({work:worktyepe});
//             res.status(200).json(data);
//         }
//         else{
//             res.status(404).json({error:"data not found"});
//         }
//     }
//     catch(err){
//         res.status(500).json({ message: "Error fetching items", err });
//     }
// })
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes);
app.listen(3000, () => {
    console.log('listening on port 3000');
})