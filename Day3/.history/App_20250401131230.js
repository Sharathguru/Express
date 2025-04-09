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

app.get("c/tasks/",(req,res,next)=>
{
    
})

export default app;


