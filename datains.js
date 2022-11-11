const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_A",(err)=>
{
if(err)
 console.log("DB not connected-error");
else
 console.log("DB connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns);
var myquery={name:"ruthu"};
var newvalues={$set:{phno:9133662115}};
nm.updateOne{myquery,newvalues,functions(err,res)
{
  if(err)throw err;
console.log("1 document updated");
db.close();
});








