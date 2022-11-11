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
    age:Number,
    PHNO:Number
});

const nm=new mongoose.model("records",ns);

const data=new nm({
    name:"sai krishna",age:20,PHNO:987654321
});
data.save();
const data1=new nm({
    name:"naga pavan",age:21,PHNO:987563722
});
data1.save();
const data3=new nm({
    name:"nivek",age:20,PHNO:985463221
});
data3.save();