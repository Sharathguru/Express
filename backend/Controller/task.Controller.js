import { User } from "../Model/task.Model.js";

// "Create a new task"
export const createTask = async (req, res, next) => {
    console.log("Request Body:", req.body); // "Log the incoming request body"
    try {
        if (!req.body.uname || !req.body.password) {
            return res.status(400).json({ status: "fail", message: "Invalid input data" });
        }
        const create = await User.create({
            uname: req.body.uname,
            password: req.body.password
        });
        res.status(201).json({
            status: "pass",
            data: create // "Return the created task"
        });
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

// "Get all tasks"
export const getTask = async (req, res, next) => {
    console.log("Fetching all tasks...");
    try {
        let find = await User.find();
        res.status(200).json({
            status: "pass",
            data: find
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        });
    }
};

// "Get a task by ID"
export const getbyIdTask = async (req, res, next) => {
    console.log(req.body);
    try {
        let id = req.params.id;
        let findbyid = await User.findById(id); // "Use only id as argument"
        res.status(200).json({
            status: "pass",
            data: findbyid
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        });
    }
};

// "Update a task by ID"
export const UpdateTask = async (req, res, next) => {
    console.log("Request Body:", req.body);
    try {
        let id = req.params.id;
        let updatedTask = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).json(updatedTask); // "Return the updated task"
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

// "Delete a task by ID"
export const DeletebyIdTask = async (req, res, next) => {
    console.log("Request Params:", req.params);
    try {
        let id = req.params.id;
        let deletedTask = await User.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).json({ status: "pass", data: deletedTask }); // "Return the deleted task"
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

