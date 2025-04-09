import exprees from "express"

let app=exprees()

let task=[{
    id:1,
    task:"reading novels"
},
{
    id:2,
    task:"playing gaming"
}
]

app.get("/tasks/:id",(req,res,next)=>
{
    let id=parseInt(req.params.id);
    let tasks=task.find(task=> task.id===id)    
    if(!tasks)
    {
        res.send("task not found")
    }
    res.send(tasks)
})

app.post("/task",(req,res,next))

export default app;


