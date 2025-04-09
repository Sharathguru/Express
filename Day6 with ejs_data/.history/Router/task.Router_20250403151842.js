import express from "express";
import { createTask, FindAllTask, FindById, findAndUpdate, findAndDelete } from "../Controller/task.Controller";

let router = express.Router();

// POST route to create a task
router.post("/", createTask);

// GET route to fetch all tasks
router.get("/", FindAllTask);

// GET route to fetch only task
router.get("/:id", FindById);

// PUT route to update a task
router.put("/task/:id", findAndUpdate);

// DELETE route to delete a task
router.delete("/task/:id", findAndDelete);

export default router;