import express from 'express';

const router=express.Router()

const createTask=(async(req,res,next)=>{
    console.log(req.body);
    try {
        let create =await createTask.create({
            uname:req.body.uname,
            password:req.body.password   
        })
        res.status(200).json({
            status:"pass",
            data:create
        })
        res.send("Task Created")
    } catch (error) {
        res.st
    }
    
})