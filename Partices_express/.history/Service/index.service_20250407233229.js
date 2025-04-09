import task from "../Model/index.model.js"
// import chalk from "chalk"

export let create=async (req,res,next)=>{
    console.log(req.body);
   {
     let createTask =await task.create({
        uname:req.body.name,
        password:req.body.password,
        confirmPassword:req.body.confirm
     })
    return createTask;
   }
}


export {
    createTask
}