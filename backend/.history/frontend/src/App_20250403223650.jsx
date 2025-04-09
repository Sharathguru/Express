import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task");
        setDetails(response.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData(); // "Invoke fetchData inside useEffect"
  }, []); // "Dependency array to ensure it runs once"

  return (
    <div>
      <h1>Signup</h1>
      <form action="">
        <input type="text" name="uname" id="" placeholder="Enter the Name" /><br /><br />
        <input type="text" name="password" id="" placeholder="Enter the password" /><br /><br />
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