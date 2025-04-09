import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);

  // "Function to fetch data from the backend"
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/task");
      setDetails(Array.isArray(response.data) ? response.data : []); // "Ensure response is an array"
    } catch (error) {
      console.log("Error fetching data:", error);
      setDetails([]); // "Fallback to empty array on error"
    }
  };

  useEffect(() => {
    fetchData(); // "Fetch data on component mount"
  }, []);

  return (
    <div>
      <h1>Signup</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const uname = e.target.uname.value.trim();
          const password = e.target.password.value.trim();

          if (!uname || !password) {
            alert("Both fields are required!");
            return;
          }

          try {
            // "Send data to the backend"
            await axios.post("http://localhost:3000/task", { uname, password });
            alert("Task added successfully!");
            e.target.reset(); // "Reset the form"
            fetchData(); // "Refetch data after adding a new task"
          } catch (error) {
            console.log("Error adding task:", error);
          }
        }}
      >