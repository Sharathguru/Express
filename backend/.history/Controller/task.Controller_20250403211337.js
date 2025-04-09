
export const createTask=async(req,res,next)=>{
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
        res.status(500).json({
            status:"fail",
           message:error
        })
        res.send("Task Not Created")
    }
    
})