import express from "express"
import fs from 'fs'
const app=express()
app.use(express.static)

app.get("/home",(req,res)=>
{
    let home=fs.readFileSync("./home.html","utf-8")
res.send(home)
})

    

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})