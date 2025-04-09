import { User } from "../Model/task.Model.js";

// "Create a new task"
export const createTask = async (req, res, next) => {
    console.log(req.body);
    try {
        let create = await User.create({
            uname: req.body.uname,
            password: req.body.password
        });
        res.status(200).json({
            status: "pass",
            data: create
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        });
    }
};

// "Get all tasks"
export const getTask = async (req, res, next) => {
    console.log(req.body);
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
        let findbyid = await User.findById(id,req.body);
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
    console.log(req.body);
    try {
        let id = req.params.id;
        let UpdateTake = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!UpdateTake) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.status(200).send(UpdateTake);
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        });
    }
};

// "Delete a task by ID"
export const DeletebyIdTask = async (req, res, next) => {
    console.log(req.body);
    try {
        
        let deletebyid = await User.findOneAndDelete();
        res.status(200).json({
            status: "pass",
            data: deletebyid
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error
        });
    }
};

