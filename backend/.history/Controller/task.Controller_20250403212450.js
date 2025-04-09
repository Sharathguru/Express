
export const createTask=async(req,res,next)=>{
    console.log(req.body);
    try {
        let create =await Task.create({
            console.log(r);
            
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