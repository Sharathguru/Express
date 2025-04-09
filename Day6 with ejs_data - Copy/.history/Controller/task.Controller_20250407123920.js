import { create, findAll, findAndDelete, findByAndUpdate, findById } from "../Service/task.service.js";

let createTask = async (req, res, next) => {
    let newTask = await create(req.body);
    res.send(newTask);
};

let FindAllTask = async (req, res, next) => {
    let tasks = await findAll(req);
    res.send(tasks);
};

let FindById = async (req, res, next) => {
    let findOne = await findById(req);
    res.send(findOne);
};

let findAndUpdate = async (req, res, next) => {
    let updateTask = await findByAndUpdate(req);
    res.send(updateTask);
};

let findAndDelete = async (req, res, next) => {
    await findAndDelete(req);
    res.send("Task deleted");
};