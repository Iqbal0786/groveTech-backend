const express= require("express");
const Product= require("../models/product.model")
const router= express.Router();

//get router
router.get("",async(req,res)=>{
    try {
        // pagination variables
        const page= req.query.page||1
        const size= req.query.size||10
        const query={category:req.query.search}
        if(req.query.search){
            const products = await Product.find(query) 
            .skip((page - 1) * size)
            .limit(size).sort({createdAt:-1})
            .lean()
            .exec();
         
          const totalPages = Math.ceil(
            (await Product.find(query).countDocuments()) / size);
      
          return res.send({ products, totalPages });
        }
        // if there is no query params then simply returing whole data from product collection
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