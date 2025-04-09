import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);

  // "Function to fetch data from the backend"
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/task");
      setDetails(response.data.data || []); // "Ensure response is an array"
    } catch (error) {
      console.log("Error fetching data:", error);
      setDetails([]); // "Fallback to empty array on error"
    }
  }
  useEffect(() => {
    fetchData(); // "Fetch data on component mount"
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // "Prevent default form submission"
    const uname = e.target.uname.value.trim();
    const password = e.target.password.value.trim();

    if (!uname || !password) {
      alert("Both fields are required!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/task", { uname, password });
      console.log("Data submitted successfully:", response.data);
      setDetails([...details, response.data.data]); // "Update state with new data"
      e.target.reset(); // "Reset the form"
    } catch (error) {
      console.log("Error submitting data:", error);
    }
  };

  let handleDelete=aysnc=()=>
  {
    try {
      const response1 = await axios.delete("http://localhost:3000/task");
      console.log("Data deleted successfully:", response.data);
      setDetails(details.filter(item => item._id !== id)); // "Update state after deletion"
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="uname" placeholder="Enter the Name" required /><br /><br />
        <input type="text" name="password" placeholder="Enter the password" required /><br /><br />
        <button type="submit">Submit</button>

      </form>
      <h1>Details</h1>
      {details.length > 0 ? (
        details.map((item, index) => (
          <div key={index}>
            <h1>Name: {item.uname}</h1>
            <h1>Password: {item.password}</h1>
            <button>edit</button> &nbsp; &nbsp;
            <button>delete</button>
          </div>
          
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default App;