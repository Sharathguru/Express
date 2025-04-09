export let createTask= async(req,res,next)=>{
    let newTask=await Task.create({ 
        task:req.body.task
    })
    res.send(newTask)
}

export let createTask= async(req,res,next)=>{
    let tasks = await Task.find()
        res.send(tasks);
}