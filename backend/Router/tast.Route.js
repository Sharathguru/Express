import express from 'express';
import { DeletebyIdTask, UpdateTask, createTask, getTask, getbyIdTask } from '../Controller/task.Controller.js';

const router = express.Router();

// "Route to create a new task"
router.post("/", createTask);

// "Route to get all tasks"
router.get("/", getTask);

// "Route to get a task by ID"
router.get("/:id", getbyIdTask);

// "Route to update a task by ID"
router.put("/:id", UpdateTask);

// "Route to delete a task by ID"
router.delete("/:id", DeletebyIdTask);

export default router;