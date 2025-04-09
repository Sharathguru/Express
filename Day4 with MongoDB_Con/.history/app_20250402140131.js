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
app.use(express.json())

// POST route to create a task
app.post("/task",async(req,res,next)=>{
    let newTask=await Task.create({
        task:req.body.task
    })
    res.send(newTask)
})
// GET route to fetch all tasks
app.get("/task",async(req,res,next)=>{
    let tasks = await Task.find()
        res.send(tasks);
})
// GET route to fetch only task
app.get("/task",async(re))



export default app;











// import express from "express";
// import { connect, model, Schema } from "mongoose";

// let app = express();

// // MongoDB connection
// async function dB() {
//     try {
//         await connect("mongodb://127.0.0.1:27017/testDB");
//         console.log("db connected");
//     } catch (error) {
//         console.log("error", error);
//     }
// }
// dB();

// // Model the database
// let taskSchema = new Schema({
//     task: String,
// });

// // Model
// let Task = model("Task", taskSchema);

// // Middleware
// app.use(express.json());

// // POST route to create a task
// app.post("/task", async (req, res, next) => {
//     try {
//         let newTask = await Task.create({
//             task: req.body.task,
//         });
//         res.send(newTask);
//     } catch (error) {
//         next(error);
//     }
// });

// // GET route to fetch all tasks
// app.get("/task", async (req, res, next) => {
//     try {
//         let tasks = await Task.find();
//         res.send(tasks);
//     } catch (error) {
//         next(error);
//     }
// });

// export default app;