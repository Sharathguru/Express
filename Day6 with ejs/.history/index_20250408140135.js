import express from "express"

let app=express()

app.set("view",".")
app.set("view engine","ejs")

app.get("/home",(req,res,next)=>{
    res.render("home",{username:"Sharath"})
})


app.listen(3001,()=>{
    console.log("Server Started 3000");
})