import express from "express"

let app=express()

app.set("view engine","ejs")

app.get("/home",(req,res,next)=>{
    res.render("home")
})


app.listen(3000,(req,res)=>{
    console.log("Server Started 3000");
})