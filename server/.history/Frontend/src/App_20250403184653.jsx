import React, { use, useEffect, useState } from 'react'

const App = () => {
  let [task, setTask] = useState([]);
  useEffect(() => { 
    const fetchTasks=async()=>
    {
      try {
        const response=await get("http://localhost:3000/task");
        setTask(response.data)
      } catch (error) {
        console.log("Error fetching tasks:", error);
      }
    }
  },[])
  return (
    <div>
      <h1>Task Manager</h1>
      <form action="">
        <input type="text" name="task" id="" placeholder='Enter task Name'/>
        <button>Submit</button>
      </form>
      <h2>Task List</h2>
      <ul>
      {task.map((task)=>{
        <li key={task._id}>
          <b>{task.task}</b>
        </li>
      })}
      </ul>
    </div>
  )
}

export default App