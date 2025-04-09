import { model, Schema } from "mongoose";

// "Define the schema for tasks"
const taskSchema = new Schema({
    uname: String,
    password: String
});

// "Create and export the User model"
export const User = model("user", taskSchema);


