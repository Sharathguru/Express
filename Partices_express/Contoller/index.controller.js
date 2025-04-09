import { create,findAllDetail , findOne , findUpdate , findDelete} from "../Service/index.service.js";

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
export let findByIdAndUpdateController=async(req,res,next)=>{
    res.send(await findUpdate(req))
}
export let findByIdAndDeleteController=async(req,res,next)=>{
    let Delete=await findDelete(req)
    res.send("Deleted")
}
