const mongoose=require("mongoose");

const connection=mongoose.connect(process.env.Mongo_url);

module.exports={connection}