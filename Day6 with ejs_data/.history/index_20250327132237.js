import expres from "express"
const PORT=4000

let app=expres()

// //Parse

// function pares(req,res,next) 
// {
//     console.log("Parse the incoming body");
//     next()
// }
// function auth(req,res,next)
// {
// console.log("Auth Successfull");
// next()
// }
// function route(req,res)
// {
// res.send("hello")
// }
// app.get("/home",pares,auth,route)

// app.listen(PORT,()=>
// {
//     console.log(`Server is ${PORT}`);
// })



app.use("/")
