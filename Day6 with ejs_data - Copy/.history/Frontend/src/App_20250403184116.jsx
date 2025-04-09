import React, { use } from 'react'

const App = () => {
  let [task, setTask] = useState([]);
  useEffect(() => { 

  }
  return (
    <div>
      <h1>Task Manager</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="task" id="" placeholder='Enter task Name'/>
        <button>Submit</button>
      </form>
      <h2>Task List</h2>
      <ul>

      </ul>
    </div>
  )
}

export default App