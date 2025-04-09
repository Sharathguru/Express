import { User } from "../Model/task.Model";

export const createTask=async(req,res,next)=>{
    console.log(req.body);
    try {
        console.log(req.body);
        
        let create =await User.create({
            uname:req.body.uname,
            password:req.body.password   
        })
        res.status(200).json({
            status:"pass",
            data:create
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
           message:error
        })  
    }   
}


export const getTask=async(req,res,next)=>{
    console.log(req.body);
    try {
        console.log(req.body);
        
        let find =await User.find()
        res.status(200).json({
            status:"pass",
            data:find
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
           message:error
        })  
    }   
}


export const getbyIdTask=async(req,res,next)=>{
    console.log(req.body);

    try {
        console.log(req.body);
        
        let findbyid =await User.findById(req.body)
        res.status(200).json({
            status:"pass",
            data:findbyid
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
           message:error
        })  
    }   
}




export const DeletebyIdTask=async(req,res,next)=>{
    console.log(req.body);

    try {
        console.log(req.body);
        
        let delete1 =await User.findOneAndDelete(req.body)
        res.status(200).json({
            status:"pass",
            data:find
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
           message:error
        })  
    }   
}

