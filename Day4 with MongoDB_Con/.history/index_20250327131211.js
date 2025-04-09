import expres from "express"
const PORT=4000

let app=expres()

//Parse

function pares(req,res,next) 
{
    console.log("Parse the incoming body");
}
function auth(req,res,next)
{
console.log("Auth Successfull");
next()
}
function route(req,res)
{
console.log("Home Page");
}
app.get("/",pares,auth,route)

