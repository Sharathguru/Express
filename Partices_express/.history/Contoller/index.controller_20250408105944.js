import { create,findAllDetail , findOne } from "../Service/index.service.js";

export let createTaskController=async(req,res,next)=>{
let createTask=await create(req)
res.send(createTask)
}

export let findAllDetailController=async(req,res,next)=>{
    res.send(await findAllDetail(req))
}

export let findById=async(req,res,next)=>{
    res.send(await )
}


