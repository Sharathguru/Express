import { create } from "../Service/index.service.js";

export let createTaskController=async(req,res,next)=>{
let createTask=await create(req)
res.status(201).json({
    message:"Success Full receviced"
}).send(createTask)
}



