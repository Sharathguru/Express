import { Task } from "../model/task.model.js";

export let createTask = async (req, res, next) => {
    console.log(req.body);
    
//     let newTask = await Task.create({
//         task: req.body.task
//     });
//     res.send(newTask);
// };
    let newTask = new Task({
        task: req.body.task
    });
    =await newTask.save();

export let FindAllTask = async (req, res, next) => {
    let tasks = await Task.find();
    res.send(tasks);
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