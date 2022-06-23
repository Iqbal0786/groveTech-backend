const mongoose= require("mongoose");
// { "name": "Red Shirt", "description": "Red hugo boss shirt", "brand": "Hugo Boss", "tags": [ "red", "shirt", "slim fit"
// ],“category”: “apparel”
// }

const productSchema= new mongoose.Schema({
           name:{type:String,required:true},
           description:{type:String,required:true},
           brand:{type:String,required:true},
           tags:[{type:String,required:true}],
           category:{type:String,required:true},
           
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("products",productSchema)