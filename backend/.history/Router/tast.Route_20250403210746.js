import express from 'express';

const router=express.Router()

const createTask=(async(req,res,next)=>{
    console.log(req.body);
    try {
        let create =await createTask.create({
            uname:req.body.uname,
            password:req.body.password   
        })
        res
    } catch (error) {
        
    }
    
})