import express from "express"
import { createTaskController } from "../Contoller/index.controller.js"

let router=express.Router()

router.post("/",createTaskController)

export default router;
