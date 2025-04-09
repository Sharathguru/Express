import express from "express"
import fs from 'fs'
const app=express()

app.get("/home",(req,res)=>
{
    fs.
res.send("hello world")
})

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})