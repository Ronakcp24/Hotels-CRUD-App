const mongoose=require('mongoose');
const mongoURL = 'mongodb://localhost:27017/mydb' 
const menuschema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    no_of_sells:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy','wet','crunchy air'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingriedients:{
        type:[String],
        default:[]
    }
})
const schm=mongoose.model("items",menuschema);
module.exports=schm;