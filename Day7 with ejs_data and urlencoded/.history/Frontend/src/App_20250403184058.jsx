import React from 'react'

const App = () => {
  let [task, setTask] = useState([]);
  e
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