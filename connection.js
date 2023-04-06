const mongoose=require("mongoose");
const connection=async ()=>{
  mongoose.connect("mongodb://127.0.0.1:27017/crud")
  let schema=new mongoose.Schema(
    name:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
phone:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
    );
    let collection=mongoose.model("record",schema);
    return collection;
}
module.exports=connection;
