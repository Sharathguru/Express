import task from "../Model/index.model.js"

let create=async (req,res,next)=>{
   try {
     let createTask =await task.create({
        uname:req.body.name,
        password:req.body.password,
        confirmPassword:req.body.confirm
     })
     res.status(201).json({
        status:"pass",
        data:createTask
     })
   } catch (error) {
    console.log("");
    
   }
}