import express from "express"

let app=express()

app.set("view")



app.listen(3000,(req,res)=>{
    console.log("Server Started 3000");
})