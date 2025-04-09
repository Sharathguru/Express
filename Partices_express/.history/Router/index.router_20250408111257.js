import express from "express"
import { createTaskController, findAllDetailController,findByIdController } from "../Contoller/index.controller.js"

let router=express.Router()

router.post("/",createTaskController)
router.get("/",findAllDetailController)
router.get("/:id",findByIdController)
router.get("/:id",findByIdController)


export default router;
