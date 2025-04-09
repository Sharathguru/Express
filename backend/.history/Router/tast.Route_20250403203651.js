import express from "express";
const router=express.Router();

let task = [{
    id: 1,
    task: "reading novels"
},
{
    id: 2,
    task: "playing gaming"
}
]

elet create=async()=>
{
    try {
        router.post("/",(req,res)=>{
            task.push({
                id:task.length+1,
                task:req.body.task
    })
    })
    } catch (error) {
       console.log(error);
        
    }

}