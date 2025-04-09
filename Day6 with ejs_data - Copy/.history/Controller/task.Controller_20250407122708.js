import { create, findAll, findAndDelete, findAndUpdate, findById } from "../Service/task.service.js";s";

let createTask = async (req, res, next) => {
    try {;
        let newTask = await create(req.body);
        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send({ error: "Failed to create task", details: error.message });
    }
};

let FindAllTask = async (req, res, next) => {
    try {
        let tasks = await findAll();Id(req);
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch tasks", details: error.message });
    }let findAndUpdate = async (req, res, next) => {
};
res.send(updateTask);
let FindById = async (req, res, next) => {
    try {
        let findOne = await findById(req.params.id);q, res, next) => {
        res.status(200).send(findOne);  await findAndDelete(req);
    } catch (error) {    res.send("Task deleted");
        res.status(500).send({ error: "Failed to fetch task", details: error.message });    }};
let findAndUpdate = async (req, res, next) => {
    try {
        let updateTask = await findAndUpdate(req.params.id, req.body);
        res.status(200).send(updateTask);
    } catch (error) {
        res.status(500).send({ error: "Failed to update task", details: error.message });
    }
};

let findAndDelete = async (req, res, next) => {
    try {
        await findAndDelete(req.params.id);
        res.status(200).send("Task deleted");
    } catch (error) {
        res.status(500).send({ error: "Failed to delete task", details: error.message });
    }
};