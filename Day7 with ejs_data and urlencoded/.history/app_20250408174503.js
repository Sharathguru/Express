import express from "express";
import dB from "./DB/task.DB.js";
import taskRouter from "./Router/task.Router.js";
import cors from 'cors';
// Connect to database
dB();

const app = express();

app.set("views","../view")

app.set("view engine","ejs")

// Middleware
app.use(express.json());


// Use task router
app.use("/tasks", taskRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

export default app;
