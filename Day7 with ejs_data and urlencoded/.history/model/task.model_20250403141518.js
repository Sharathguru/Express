//model the database
let taskSchema=new Schema({
    task:String
})

//model
let Task=model("Task",taskSchema)

