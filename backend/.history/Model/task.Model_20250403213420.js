import {model, Schema} from "mongoose"

const taskSchema=new Schema({
    uname:String,
    password:String
})

const User=model("user",taskSchema)

