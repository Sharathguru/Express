import express from "express";
import taskRouter from "./Router/tast.Route.js";
import dbConnection from "./Config/Database.js";
import cors from 

// "Connect to the database"
dbConnection();

const app = express();

const PORT = 3000;

// "Middleware to parse JSON requests"
app.use(express.json());

// "Route for task-related operations"
app.use("/task", taskRouter);

// "Middleware to handle errors"
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

// "Start the server"
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});