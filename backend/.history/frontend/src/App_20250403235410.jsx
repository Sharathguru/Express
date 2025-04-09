import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);
  let [editId, setEditId] = useState(null);
  let [editData, setEditData] = useState({ uname: "", password: "" });

  // "Function to fetch data from the backend"
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/task");
      setDetails(response.data.data || []); // "Ensure response is an array"
    } catch (error) {
      console.log("Error fetching data:", error);
      setDetails([]); // "Fallback to empty array on error"
    }
  };

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
      if (editId) {
        // "Update task"
        const response = await axios.put(`http://localhost:3000/task/${editId}`, { uname, password });
        console.log("Data updated successfully:", response.data);
        setDetails(details.map(item => (item._id === editId ? response.data : item))); // "Update state with edited data"
        setEditId(null);
        setEditData({ uname: "", password: "" });
      } else {
        // "Create new task"
        const response = await axios.post("http://localhost:3000/task", { uname, password });
        console.log("Data submitted successfully:", response.data);
        setDetails([...details, response.data.data]); // "Update state with new data"
      }
      e.target.reset(); // "Reset the form"
    } catch (error) {
      console.log("Error submitting data:", error);
    }
  };

  const handleEdit = (id, uname, password) => {
    setEditId(id);
    setEditData({ uname, password });
  };

  const handleDelete = async (id) => {
    log(id);
    try {
      await axios.delete(`http://localhost:3000/task/${id}`);
      console.log("Data deleted successfully");
      setDetails(details.(item => item._id !== id)); // "Update state after deletion"
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="uname"
          placeholder="Enter the Name"
          value={editData.uname}
          onChange={(e) => setEditData({ ...editData, uname: e.target.value })}
          required
        /><br /><br />
        <input
          type="text"
          name="password"
          placeholder="Enter the password"
          value={editData.password}
          onChange={(e) => setEditData({ ...editData, password: e.target.value })}
          required
        /><br /><br />
        <button type="submit">{editId ? "Update" : "Submit"}</button>
      </form>
      <h1>Details</h1>
      {details.length > 0 ? (
        details.map((item, index) => (
          <div key={index}>
            <h1>Name: {item.uname}</h1>
            <h1>Password: {item.password}</h1>
            <button onClick={() => handleEdit(item._id, item.uname, item.password)}>Edit</button> &nbsp; &nbsp;
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default App;