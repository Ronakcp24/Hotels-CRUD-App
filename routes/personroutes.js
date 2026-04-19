const express = require('express')
const router = express.Router();
const person = require('../personschema');
router.post('/save',async function (req, res) {
    try {
       const data = req.body; // Use 'data' to match your assignments below

        // Use the model you imported (person) to create a new instance
        const newPerson = new person(data); 

        // Save to database
        const response = await newPerson.save();
        console.log("Data saved successfully");
        res.status(200).json(response);
    }
    catch (err) {
        res.status(500).json({error:'internal server error'});
    }
})
router.get('/:worktype',async function(req,res){
    try{
        const worktyepe=req.params.worktype;
        if(worktyepe=='chef'||worktyepe=='manager'||worktyepe=='waiter'){
            const data=await person.find({work:worktyepe});
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error:"data not found"});
        }
    }
    catch(err){
        res.status(500).json({ message: "Error fetching items", err });
    }
})
module.exports=router;