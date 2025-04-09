import task from "../Model/index.model.js"
// import chalk from "chalk"

export let create=async (req,res,next)=>{
    console.log(req.body);
    
   try {
     let createTask =await task.create({
        uname:req.body.name,
        password:req.body.password,
        confirmPassword:req.body.confirm
     })
     res.status(201).json({
        status:"pass",
        data:createTask,
        message:"Task created successfully"
     })
   } catch (error) {
    console.error.chalk.green("Error creating task" ,error);
    res.status(501).json({
        status:"fail",
        error:error.message
    })
   }
}