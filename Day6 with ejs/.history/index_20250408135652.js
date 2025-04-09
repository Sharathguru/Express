import express from "express"

let app=express()

// app.set("views","./")
app.set("view engine","ejs")

app.get("/",(req,res,next)=>{
    res.render("home",{username:"Sharath"})
})


app.listen(3000,()=>{
    console.log("Server Started 3000");
})