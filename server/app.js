import express from "express";
import dB from "./DB/task.DB.js";
import taskRouter from "./Router/task.Router.js";
import cors from 'cors';
// Connect to database
dB();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());


// Use task router
app.use("/tasks", taskRouter);

export default app;
