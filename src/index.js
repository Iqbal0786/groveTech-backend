const express= require("express");
const connect =require("./config/db")
const productController= require("./controllers/product.controller")
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/v1/products",productController)


app.get("",async(req,res)=>{
  try {
    return res.send("Server is live now")
  } catch (error) {
    return res.send(error.message)
  }
})

const port=process.env.PORT||1212;
app.listen(port,async()=>{
    try {
         await connect();
         console.log("Listening the port number 1212");
    } catch (error) {
        console.log(error.message)
    }
})