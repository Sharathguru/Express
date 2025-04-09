import express from "express";
import dB from "./DB/task.DB.js";
import taskRouter from "./Router/task.Router.js";
import cors from 'cors';
// Connect to database
dB();

const app = express();



// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from the frontend
//cors is used to allow cross-origin requests from the frontend application running on localhost:5173

// Use task router
app.use("/task", taskRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

export default app;
