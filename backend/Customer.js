const mongoose=require("./db");

const CustomerSchema=new mongoose.Schema({

name:String,

phone:String,

email:String,

address:String

});

module.exports=mongoose.model("Customer",CustomerSchema);
