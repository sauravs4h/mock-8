const express=require("express");
const app=express();
var cors = require('cors')

const {connection}=require("./config/db");
const {userr}=require("./routes/user.routes");
const {product}=require("./routes/product.routes");

app.use(express.json());
app.use(cors())
app.use("/user",userr);
app.use("/product",product);

app.get("/",(req,res)=>{
    res.send({msg:"base api"});
})

app.listen(8080,async()=>{

    try {
        await connection;
        console.log("connected to db")
        console.log("Running on 8080")
    } catch (error) {
        console.log("error while running")
    }
    
})