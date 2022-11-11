const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/sai",(err)=>{
    if(err)
        console.log("not connected");
    else
        console.log("connected");
});

const ns=new mongoose.Schema({
    name:String,
    age:Number
});

const nm=new mongoose.model("records",ns);

nm.findOne({},function(err,data){
    if(err)
        console.log(err);
    else
        console.log("first function call : ",data);
});