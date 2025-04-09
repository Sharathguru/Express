import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    uname:String,
    password:String,
    confirmPassword:String
})
const Task=mongoose.model("user",taskSchema,"userDetails")

export default Task;