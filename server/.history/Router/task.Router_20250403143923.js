import express from "express"
import { createTask } from "../Controller/task.Controller"

let router=express.Router()

// POST route to create a task
router.post("/task",createTask)

// GET route to fetch all tasks
router.get("/task",)

// GET route to fetch only task
router.get("/task/:id",)
// PUT route to update a task
router.put("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let updateTask= await Task.findByIdAndUpdate(id,req.body.task,{new:true})
    res.send(updateTask);
})
// DELETE route to delete a task
router.delete("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let deleteTask=await Task.findByIdAndDelete(id)

    if(!deleteTask)
    {
        res.send("not found")
    }
    res.send("Deleted The Tasked");
})

export default router;