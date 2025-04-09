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
    let task=task.find(task=> task.id===id)    
    if(!task)
    {
        res.send("task not found")
    }
    res.send(task)
})

export default app;


