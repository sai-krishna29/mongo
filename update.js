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

var myquery={name:"ravi"};
var newvalues={age:76};
nm.findOneAndUpdate(myquery,newvalues,(err)=>{
    if(err) {
        console.log("error");
    }else{
        console.log("updated");
    }

});