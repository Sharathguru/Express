import { create,findAllDetail , findOne , findUpdate } from "../Service/index.service.js";

export let createTaskController=async(req,res,next)=>{
let createTask=await create(req)
res.send(createTask)
}

export let findAllDetailController=async(req,res,next)=>{
    res.send(await findAllDetail(req))
}

export let findByIdController=async(req,res,next)=>{
    res.send(await findOne(req))
}
export let findByIdAndUpdate=async(req,res,next)=>{
    res.send(await findUpdate(req))
}

