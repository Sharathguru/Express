import { Schema, model } from "mongoose";

// Model the database
let taskSchema = new Schema({
    task: {
        type: String,
        required: [true, "Task is required"],
        trim: true
    }
});

// Model
export let Task = model("task", taskSchema);

