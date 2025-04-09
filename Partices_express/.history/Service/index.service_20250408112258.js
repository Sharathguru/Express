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

let findOne=async(req,res,next)=>{
    let id=req.params.id;
    return await Task.findById(id)
}
let findUpdate=async(req,res,next)=>{
    console.log(req.body);
    
    let id=req.params.id;
    let update=await Task.findOneAndUpdate({_id:id},{uname:req.body.name,password:req.body.password,confirmPassword:req.body.confirm},{new:true})
    return update
}
let findDelete=async(req,res,next)=>{
    let id=req.params.id;
    return await Task.
}

export {
    create,
    findAllDetail,
    findOne,
    findUpdate
}