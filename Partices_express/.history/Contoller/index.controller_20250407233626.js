import { create } from "../Service/index.service";

export let createTaskController=async(req,res,next)=>{
let createTask=await create(req)
res.status(201).json({
    message:"Success Full receviced"
}).send(crea)
}


