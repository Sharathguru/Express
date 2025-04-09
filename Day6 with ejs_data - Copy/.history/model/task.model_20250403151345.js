import { Schema, model } from "mongoose";

//model the database
let taskSchema = new Schema({
    task: String,
});

//model
export let Task = model("Task", taskSchema);

