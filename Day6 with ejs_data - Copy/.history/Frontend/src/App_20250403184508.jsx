import React, { use } from 'react'

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
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="task" id="" placeholder='Enter task Name'/>
        <button>Submit</button>
      </form>
      <h2>Task List</h2>
      <ul>
      {task.map((task)=>{
        <li>
          
        </li>
      })}
      </ul>
    </div>
  )
}

export default App