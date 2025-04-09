import {model, Schema} from "mongoose"

const taskSchema=new Schema({
    uname:String,
    password:String
})

export const User=model("user",taskSchema)


