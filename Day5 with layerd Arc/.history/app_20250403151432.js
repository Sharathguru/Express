import express from "express";
import { dB } from "./DB/task.DB";
import taskRouter from "./Router/task.Router";
//connect to database
dB();

let app = express();

//middleware
app.use(express.json());



//use task router
app.use("/api", taskRouter);

export default app;