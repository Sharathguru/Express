import express from "express"
import {connect, model, Schema} from "mongoose";

let app = express()

//mongodb connection
async function dB()
{
    try {
        await connect("mongodb://127.0.0.1:27017/testDB")
        console.log("db connected");
    } catch (error) {
        console.log("error",error);
    }
}
dB()

//model the database
let taskSchema=new Schema({
    task:String
})

//model
let Task=model("Task",taskSchema)


//middleware
app.use(express.json)

app.post("/task",async(req,res,next)=>{
    let newTask=await Task.create({
        task:req.body.task
    })
    res.send(newTask)
})

app.get


export default app;


