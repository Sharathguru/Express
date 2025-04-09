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
app.get("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let findOne=await Task.findById(id)
    res.send(findOne)
})
// PUT route to update a task
app.put("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let updateTask= await Task.findByIdAndUpdate(id,req.body.task,{new:true})
    res.send(updateTask);
})
// DELETE route to delete a task
app.delete("/task/:id",async(req,res,next)=>{
    let id=req.params.id;
    let deleteTask=await Task.findByIdAndDelete(id)

    if(!deleteTask)
    {
        res.send("not found")
    }
    res.send("Deleted The Tasked");
})