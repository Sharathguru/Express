import { create, findAll, findByAndDelete, findByAndUpdate, findById } from "../Service/task.service.js";

export let createTask = async (req, res, next) => {
    let newTask = await create(req.body);
    res.redirect("/tasks")
};

export let FindAllTask = async (req, res, next) => {
    let tasks = await findAll(req);
    res.render("home",{tasks});
};

export let FindById = async (req, res, next) => {
    let task = await findById(req.params.id);
    res.render("update",{task})
};

export let findAndUpdate = async (req, res, next) => {
      await findByAndUpdate(req.params.id,req.body);
    res.redirect("/tasks")
};

export let findAndDelete = async (req, res, next) => {
    await findByAndDelete(req);
    res.redirect("/tasks")
};