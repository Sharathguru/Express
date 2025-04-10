import express from "express";
import dB from "./DB/task.DB.js";
import taskRouter from "./Router/task.Router.js";
import methodOverride from 'method-override';
// Connect to database
dB();

const app = express();

app.set("views","./view")
// app.set("views", path.join(__dirname, "views"));

app.set("view engine","ejs")

// Middleware
// app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
// app.use(me)

// Use task router
app.use("/tasks", taskRouter);

// Error handling middleware


export default app;
