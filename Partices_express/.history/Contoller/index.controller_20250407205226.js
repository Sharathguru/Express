import task from "../Model/index.model.js"

let create=async (req,res,next)=>{
   try {
     let createTask =await task.create()
   } catch (error) {
    
   }
}