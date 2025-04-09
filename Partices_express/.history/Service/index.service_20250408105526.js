import Task from "../Model/index.model.js";
// import chalk from "chalk"

let create=async (req,res,next)=>{
    console.log(req.body);
     let createTask =await Task.create({
        uname:req.body.name,
        password:req.body.password,
        confirmPassword:req.body.confirm
     })
    return createTask;
   }


let findAllDetail=async(req,res,next)=>{
    return await Task.find()
}

let 

export {
    create,
    findAllDetail
}