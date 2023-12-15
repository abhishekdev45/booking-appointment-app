const mongoose = require("mongoose");

const admSchema = mongoose.Schema(
    {
        name:{type:String,require},
        email:{type:String,require},
        password:{type:String,require:true},
        department:{type:String,require:true},
        role:{type:String,require:true}
        
    }
)