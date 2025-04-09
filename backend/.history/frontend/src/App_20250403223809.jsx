import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task");
        setDetails(Array.isArray(response.data) ? response.data : []); // "Ensure response is an array"
      } catch (error) {
        console.log("error fetching data", error);
        setDetails([]); // "Fallback to empty array on error"
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Signup</h1>
      <form action="">br />
        <input type="text" name="uname" id="uname" placeholder="Enter the Name" /><br /><br />/><br />
        <input type="text" name="password" id="password" placeholder="Enter the password" /><br /><br />
        <button>Submit</button>
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

export default App;