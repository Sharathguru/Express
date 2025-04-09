import { create, findAll, findByAndDelete, findByAndUpdate, findById } from "../Service/task.service.js";

export let createTask = async (req, res, next) => {
    try {
        let newTask = await create(req.body);
        res.redirect("/tasks");
    } catch (error) {
        next(error);
    }
};

export let FindAllTask = async (req, res, next) => {
    try {
        let tasks = await findAll();
        res.render("home", { tasks });
    } catch (error) {
        next(error);
    }
};

export let FindById = async (req, res, next) => {
    try {
        let findOne = await findById(req.params.id);
        res.render("update", { tasks: findOne });
    } catch (error) {
        next(error);
    }
};

export let findAndUpdate = async (req, res, next) => {
    try {
        let updateTask = await findByAndUpdate(req.params.id, req.body);
        res.redirect("/tasks");
    } catch (error) {
        next(error);
    }
};

export let findAndDelete = async (req, res, next) => {
    try {
        await findByAndDelete(req.params.id);
        res.redirect("/tasks");
    } catch (error) {
        next(error);
    }
};