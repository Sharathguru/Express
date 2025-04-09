import express from "express"

let app=express()

let task=[{
    id:1,
    task:"reading novels"
},
{
    id:2,
    task:"playing gaming"
}
]

app.use(express.json())


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

app.post("/task",(req,res,next)=>{
// console.log(req.body);
task.push({
    id:task.length+1,
    task:req.body
})
})

export default app;


