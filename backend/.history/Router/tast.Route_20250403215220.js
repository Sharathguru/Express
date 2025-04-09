import express from 'express';
import { createTask } from '../Controller/task.Controller.js';

const router = express.Router();

router.post("/", createTask);
router.get("/",getTask)


export default router;