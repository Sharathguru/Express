import exprees from "express"

let app=exprees()

let tasks=[{
    id:1,
    task:"reading novels"
},
{
    id:2,
    task:"playing gaming"
}
]

app.get("./tasks",(req,res,nex))

export default app;


