const express=require("express");
const {Productmodel}=require("../models/product.model")
const product=express.Router();

product.post("/addproduct",async(req,res)=>{
    const payload=req.body;

    try {

        const pro= new Productmodel(payload);
        await pro.save()

        res.send({mag:"prodect added successfully" ,status:"success"})
        
    } catch (error) {
        res.send({mag:"prodect not added successfully,try again" ,status:"error"})
    }
})

product.get("/getproduct",async(req,res)=>{

    try {

        let pro=await Productmodel.find();
        res.send({products:pro,status:"success"})
        
    } catch (error) {
        res.send({msg:"something went wrong",status:"error"})
        
    }
});

product.delete("/deletepro/:id",async(req,res)=>{

    let proid=req.params.id

    try {
        await Productmodel.findByIdAndDelete({_id:proid});
        res.send({msg:"delete successfull",status:"success"});
        
    } catch (error) {
        console.log(error)
        res.send({msg:"delete unsuccessfull",status:"error"});
        
    }
})


//filter by cat
product.get("/getproductbycat/:cat",async(req,res)=>{

    let cat=req.params.cat

    try {

        let pro=await Productmodel.find({category:cat});
        res.send({products:pro,status:"success"})
        
    } catch (error) {
        res.send({msg:"something went wrong",status:"error"})
        
    }
});


module.exports={product}