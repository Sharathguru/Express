import { Schema, model } from "mongoose";

// Model the database
let taskSchema = new Schema({
    task: {
        type: String,
        required: [true, "Task is required"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false // Default value for completed
    }
});

// Model
export let Task = model("Task", taskSchema);

