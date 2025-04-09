import express from "express";
import { createTask, FindAllTask, FindById, findAndUpdate, findAndDelete } from "../Controller/task.Controller.js";

const router = express.Router();

// Routes
router.get("/", FindAllTask); // Get all tasks
router.post("/", createTask); // Create a new task
router.get("/:id", FindById); // Get a task by ID (for update form)
router.post("/:id", findAndUpdate); // Update a task by ID
router.post("/delete/:id", findAndDelete); // Delete a task by ID

export default router;