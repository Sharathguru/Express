import { create1,findAll1,findAndDelete1,findAndUpdate1,findById1} from "../Service/task.service";

 let createTask = async (req, res, next) => {
    let newTask =await create1(req)
    res.send(newTask);
};

 let FindAllTask = async (req, res, next) => {
    let tasks = await findAll1(req);
    res.send(tasks);
};

 let FindById = async (req, res, next) => {
    // let id = req.params.id;
    let findOne = await findById1(req);
    res.send(findOne);
};

 let findAndUpdate = async (req, res, next) => {
    
        // let id = req.params.id;
        let updateTask = await Task.findAndUpdate1(req);
        res.send(updateTask);
};

 let findAndDelete = async (req, res, next) => {
   await findAndDelete1(req)
   res.send("Task deleted")
};