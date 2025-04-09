import express from "express"
import path from 'path'
const app=express()
app.use(express.static(path.resolve()))

app.get("/home",(req,res)=>
{
res.sendFile(path.resolve)
})

    

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})