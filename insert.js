const express=require("express");
const app=express();
const model=require("./connection");
const parser=require("body-parser");
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.get("/",(req,resp)=>{
  resp.sendFile(__dirname+"/form.html");
})
app.post("/insert",(req,resp)=>{
  let collection=model();
  let qry=new collection(req.body);
  let result=await qry.save();
  let display=await collection.find();
  resp.send("<a href='/'>back to home</a><br>"+display);

})
app.listen(4000,()=>{
  console.log("App is listening on port:4000");
})
