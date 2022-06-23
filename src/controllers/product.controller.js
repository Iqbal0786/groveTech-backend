const express= require("express");
const Product= require("../models/product.model")
const router= express.Router();

//get router
router.get("",async(req,res)=>{
    try {
         const products= await Product.find().lean().exec();
         return res.status(200).send(products)
        
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
// post router
router.post("",async(req,res)=>{
    try {
         const product= await Product.create(req.body);
         return res.status(201).send(product)
        
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports=router;