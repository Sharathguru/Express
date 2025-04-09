import express from "express"
import fs from 'fs'
const app=express()

app.get("/home",(req,res)=>
{
    let home=fs.readFileSync("./home.html","utf-8")
res.send(home)
})
app.get("/style",(req,res)=>
    {
        let home=fs.readFileSync("./style.html","utf-8")
    res.send(style)
    })
    app.get("/home",(req,res)=>
        {
            let home=fs.readFileSync("./home.html","utf-8")
        res.send(home)
        })

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})