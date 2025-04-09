import express from "express";
import taskRouter from "./Router/tast.Route.js";
import dbConnection from "./Config/Database.js";
//connection
dbConnection()

const app = express();

const PORT = 3000;

//middleware
app.use(express.json());
app.use("/task", taskRouter);

//middleware error handle
app.use((err,req,res,next)=>
{
    console.log(err.stack);
    
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});