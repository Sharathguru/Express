import express from "express";
import dB from "./DB/task.DB.js";
import taskRouter from "./Router/task.Router.js";

// Connect to database
dB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors)

// Use task router
app.use("/task", taskRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

export default app;
