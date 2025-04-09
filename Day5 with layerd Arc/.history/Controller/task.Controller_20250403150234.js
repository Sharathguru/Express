export let createTask= async(req,res,next)=>{
    let newTask=await Task.create({ 
        task:req.body.task
    })
    res.send(newTask)
}

export let FindAllTask= async(req,res,next)=>{
    let tasks = await Task.find()
        res.send(tasks);
}

export let FindById=async(req,res,next)=>{
    let id=req.params.id;
    let findOne=await Task.findById(id)
    res.send(findOne)
}

async(req,res,next)=>{
    let id=req.params.id;
    let updateTask= await Task.findByIdAndUpdate(id,req.body.task,{new:true})
    res.send(updateTask);
}