import { create,findAll,findAndDelete,findAndUpdate,findById} from "../Service/task.service";

 let createTask = async (req, res, next) => {
    let newTask =await create(req)
    res.send(newTask);
};

 let FindAllTask = async (req, res, next) => {
    let tasks = await find;
    res.send(tasks);
};

 let FindById = async (req, res, next) => {
    let id = req.params.id;
    let findOne = await Task.findById(id);
    res.send(findOne);
};

 let findAndUpdate = async (req, res, next) => {
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

 let findAndDelete = async (req, res, next) => {
    let id = req.params.id;
    let deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
        res.send("not found");
    }
    res.send("Deleted The Task");
};