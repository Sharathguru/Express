import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [details, setDetails] = useState([]);

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/task");
      setDetails(response.data.da || []);
    } catch (error) {
      console.log("Error fetching data:", error);
      setDetails([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uname = e.target.uname.value.trim();
    const password = e.target.password.value.trim();

    if (!uname || !password) {
      alert("Both fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/task", { uname, password });
      alert("Task added successfully!");
      e.target.reset();
      fetchData();
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="uname" placeholder="Enter Name" required /><br /><br />
        <input type="password" name="password" placeholder="Enter Password" required /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Task List</h2>
      <ul>
        {details.map((task, index) => (
          <li key={index}>
            <strong>Name:</strong> {task.uname} <br />
            <strong>Password:</strong> {task.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
