import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task");
        setTasks(response.data);
      } catch (error) {
        console.log("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/task", { task: newTask });
      setTasks([...tasks, response.data]);
      setNewTask("");
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter task name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={}>
            <b>{task.task}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;