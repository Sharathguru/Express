import express from "express";
import dB from "../DB/task.DB.js";  // Make sure the path is correct
import taskRouter from "./Router/task.Router.js";

// Connect to database
dB();

const app = express();

// Middleware
app.use(express.json());

// Use task router
app.use("/task", taskRouter);

export default app;
