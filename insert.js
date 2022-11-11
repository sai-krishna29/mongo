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

nm.insertMany([
    {name:"ravi",age:36},
    {name:"sutlej",age:26},
    {name:"beas",age:34},
]).then(function(){
    console.log("data inserted");
}).catch(function(error){
    console.log(error)
});