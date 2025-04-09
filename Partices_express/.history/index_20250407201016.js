import express from "express"

//Port Number
let PORT=3000

let app=express()






app.listen(PORT,()=>{
    console.log(`Server Started to Run Port Number is ${PORT}` );
    
})