const express = require('express')
const router = express.Router();
const menu = require('../menu');
router.get('/',async function(req,res){
    try{
        const allItems=await menu.find();
        res.status(200).json(allItems);
    }
    catch(err){
        res.status(500).json({ message: "Error fetching items", err });
    }
})
router.post('/add',async function(req,res){
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
router.get('/:taste',async function(req,res){
    console.log("inside");
    const taste=req.params.taste;
    console.log(taste);
    try{
        if(taste==='sweet'||taste==='sour'||taste==='spicy'){
            console.log("hella");
            const dish=await menu.find({taste:taste});
            if(!dish){
                res.status(500).json({err:"not yet prepared"});
            }
            else{
                res.status(200).json(dish);
            }
        }
        else{
            console.log("here too");
            res.status(404).json({err:"youh bud wrong taste"});
        }
    }
    catch(err){
        console.log("here");
        res.status(500).json({err:"error bro"});
    }
})
router.put('/:id',async function(req,res){
    const ind=req.params.id;
    const data=req.body;
        try{
            const updateddata=await menu.findByIdAndUpdate(ind,data,{new:true});
            if (!updateddata) {
            return res.status(404).json({ message: "Item not found!" });
            }
            return res.status(200).json({ message: "done" });
        }
        catch(error){
            res.status(500).json({ 
            message: "An error occurred while updating", 
            error: error.message 
        });
        }
})
module.exports=router;