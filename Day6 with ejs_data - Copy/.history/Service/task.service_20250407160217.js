import { Task } from "../model/task.model.js";

let create = async (taskData) => {
    let newTask = await Task.create({
        task: taskData.task,
        completed: false
    });
    return newTask;ll
};

let findAll = async () => {
    return await Task.find();
};

let findById = async (id) => {
    return await Task.findById(id);
};

let findByAndUpdate = async (id, updateData) => {
    let updateTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
    if (!updateTask) {
        throw new Error("Task not found");
    }
    return updateTask;
};

let findByAndDelete = async (id) => {
    let deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
        throw new Error("Task not found");
    }
    return deleteTask;
};

export {
    create,
    findAll,
    findById,
    findByAndUpdate,
    findByAndDelete
};