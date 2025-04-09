import { Task } from "../model/task.model.js";

export let createTask = async (req, res, next) => {
    try {
        let newTask = new Task({
            task: req.body.task
        });
        newTask = await newTask.save();
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
    try {
        let id = req.params.id;
        let findOne = await Task.findById(id);
        if (!findOne) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).send(findOne);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch task", details: error.message });
    }
};

export let findAndUpdate = async (req, res, next) => {
    try {
        let id = req.params.id;
        let updateTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateTask) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).send(updateTask);
    } catch (error) {
        res.status(500).send({ error: "Failed to update task", details: error.message });
    }
};

export let findAndDelete = async (req, res, next) => {
    try {
        let id = req.params.id;
        let deleteTask = await Task.findByIdAndDelete(id);
        if (!deleteTask) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).send({ message: "Deleted the task successfully" });
    } catch (error) {
        res.status(500).send({ error: "Failed to delete task", details: error.message });
    }
};