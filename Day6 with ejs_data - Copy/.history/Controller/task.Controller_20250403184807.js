import { Task } from "../model/task.model.js";

export let createTask = async (req, res, next) => {
    try {
        let newTask = await Task.create({
            task: req.body.task
        });
        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send({ error: "Failed to create task", details: error.message });
    }
};

export let FindAllTask = async (req, res, next) => {
    try {
        let tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch tasks", details: error.message });
    }
};

export let FindById = async (req, res, next) => {
    let id = req.params.id;
    let findOne = await Task.findById(id);
    res.send(findOne);
};

export let findAndUpdate = async (req, res, next) => {
    let id = req.params.id;
    let updateTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updateTask);
};

export let findAndDelete = async (req, res, next) => {
    let id = req.params.id;
    let deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
        res.send("not found");
    }
    res.send("Deleted The Task");
};