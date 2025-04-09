import express from "express"
import { create } from "../Contoller/index.controller.js"

let router=express.Router()

router.post("/",createTaskController)

export default router;
