import express from "express"
import { createTaskController, findAllDetailController,findByIdController ,findByIdAndUpdateController } from "../Contoller/index.controller.js"

let router=express.Router()

router.post("/",createTaskController)
router.get("/",findAllDetailController)
router.get("/:id",findByIdController)
router.put("/:id",findByIdAndUpdateController)
router.put("/:id",findByIdAndUpdateController)



export default router;
