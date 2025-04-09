import express from "express"
import { createTaskController, findAllDetailController } from "../Contoller/index.controller.js"

let router=express.Router()

router.post("/",createTaskController)
router.post("/",findAllDetailController)

export default router;
