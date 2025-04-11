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
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/task/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  }
  const handleComplete = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/task/${id}`, { completed: true });
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (error) {
      console.log("Error completing task:", error);
    }
  }

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
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task._id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <b>{task.task}</b>
            <button onSubmit={}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;