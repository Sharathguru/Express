import express from "express"

let router=express.Router()

// POST route to create a task
router.post("/task",async(req,res,next)=>{
    let newTask=await Task.create({
        
        
        task:req.body.task
    })
    res.send(newTask)
})
// GET route to fetch all tasks
router.get("/task",async(req,res,next)=>{
    let tasks = await Task.find()
        res.send(tasks);
})
// GET route to fetch only task
router.get("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let findOne=await Task.findById(id)
    res.send(findOne)
})
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

export de