import express from "express";
import { createTask, FindAllTask, FindById, findAndUpdate, findAndDelete } from "../Controller/task.Controller.js";

let router = express.Router();

// POST route to create a task
router.post("/", createTask);

// GET route to fetch all tasks
router.get("/", FindAllTask);

// GET route to fetch a task by ID
router.get("/:id", FindById);

// PUT route to update a task by ID
router.put("/:id", findAndUpdate);

// DELETE route to delete a task by ID
router.delete("/:id", findAndDelete);

export default router;