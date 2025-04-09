import express from "express";
import {dB}  from "./DB/task.DB";
import taskRouter from "./Router/task.Router";
//connect to database


let app = express();

//middleware
app.use(express.json());



//use task router
app.use("/task", taskRouter);

export default app;