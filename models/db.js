const mongoose =require('mongoose')
const express = require('express')

mongoose.connect("mongodb://localhost:27017/karthi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        
        
    },
    phone: {
        type: Number,
        
    },
    mail: {
        type:String,
    },
    gen: {
        type:String,
    },
    oil:{
        type:String,

    },
    water:{
        type:String,
    },
     status:{
        type:String,
     },
    // mail: {
    //     type:String,
    // }


},{versionKey:false})
const userModel=mongoose.model("users",userSchema)
module.exports=userModel