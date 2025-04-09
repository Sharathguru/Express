import express from 'express';
import { DeletebyIdTask, UpdateTask, createTask, getTask, getbyIdTask } from '../Controller/task.Controller.js';

const router = express.Router();

// "Route to create a new task"
router.post("/", createTask);

// "Route to get all tasks"
router.get("/", getTask);

// "Route to get a task by ID"
router.get("/:id", getbyIdTask);



router.put("/:id",UpdateTask)

router.delete("/:id",DeletebyIdTask)

export default router;