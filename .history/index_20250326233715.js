import express from "express"
import second from ''
const app=express()

app.get("/home",(req,res)=>
{
res.send("hello world")
})

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})