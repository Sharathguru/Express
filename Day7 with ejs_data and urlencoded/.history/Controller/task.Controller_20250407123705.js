import { create, findAll, findAndDelete, findAndUpdate, findById } from "../Service/task.service.js";

let createTask = async (req, res, next) => {
    let newTask = await create(req.body);
    res.send(newTask);
};

let FindAllTask = async (req, res, next) => {
    let tasks = await findAll();
    res.send(tasks);
};

let FindById = async (req, res, next) => {
    let findOne = await findById(req.params.id);
    res.send(findOne);
};

let findAndUpdate = async (req, res, next) => {
    let updateTask = await findAndUpdate(req.params.id, req.body);
    res.send(updateTask);
};

let findAndDelete = async (req, res, next) => {
    await findAndDelete(req.params.id);
    res.send("Task deleted");
};