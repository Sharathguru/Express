import { create,find } from "../Service/index.service.js";

export let createTaskController=async(req,res,next)=>{
let createTask=await create(req)
res.send(createTask)
}

export let findAllDetailController



