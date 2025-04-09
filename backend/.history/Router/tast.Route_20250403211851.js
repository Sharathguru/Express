import express from 'express';

const router = express.Router();

let task = [
    { id: 1, task: "reading novels" },
    { id: 2, task: "playing gaming" }
];

const createTask = (req, res) => {
    try {
        const newTask = {
            id: task.length + 1,
            task: req.body.task
        };
        task.push(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

router.post("/", createTask);

export default router;