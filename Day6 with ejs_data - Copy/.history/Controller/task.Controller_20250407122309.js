import { create,findAll,findAndDelete,findAndUpdate,findById} from "../Service/task.service";

 let createTask = async (req, res, next) => {
    let newTask =await create(req)
    res.send(newTask);
};

 let FindAllTask = async (req, res, next) => {
    let tasks = await findAll(req);
    res.send(tasks);
};

 let FindById = async (req, res, next) => {
    // let id = req.params.id;
    let findOne = await findById(req);
    res.send(findOne);
};

 let findAndUpdate = async (req, res, next) => {
    
        // let id = req.params.id;
        let updateTask = await Task.findAndUpdate(req);
        res.send(updateTask);
};

 let findAndDelete = async (req, res, next) => {
   a
};