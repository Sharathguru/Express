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

router.post("/",(req,res)=>{
task.push({
    
})
})

const createTask=ro