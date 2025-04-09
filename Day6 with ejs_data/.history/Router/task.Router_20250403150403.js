import express from "express"
import { createTask } from "../Controller/task.Controller"

let router=express.Router()

// POST route to create a task
router.post("/task",createTask)

// GET route to fetch all tasks
router.get("/task",FindAllTask)

// GET route to fetch only task
router.get("/task/:id",FindById)
// PUT route to update a task
router.put("/task/:id",findAndUpdate)
// DELETE route to delete a task
router.delete("/task/:id",)

export default router;