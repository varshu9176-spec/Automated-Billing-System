const mongoose=require("./db");

const BillSchema=new mongoose.Schema({

customer:String,

product:String,

quantity:Number,

total:Number,

payment:String

});

module.exports=mongoose.model("Bill",BillSchema);