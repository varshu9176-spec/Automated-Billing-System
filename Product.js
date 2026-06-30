const mongoose=require("./db");

const ProductSchema=new mongoose.Schema({

name:String,

price:Number,

stock:Number

});

module.exports=mongoose.model("Product",ProductSchema);