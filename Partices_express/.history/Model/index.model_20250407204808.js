import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    uname:String,
    password:String,
    confirmPassword:String,
    status:{
        
    }
})