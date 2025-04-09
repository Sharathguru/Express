import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  let [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/task");
        setDetails(response.data.data||[]);
      } catch (error) {
        console.log("error fetching data", error);
        setDetails([]);
      }
    };
    fetchData(); // "Invoke fetchData inside useEffect"
  }, []); // "Dependency array to ensure it runs once"

  const handleSubmit = async (e) => {
    e.pr
  return (
    <div>
      <h1>Signup</h1>
      <form action="">
        <input type="text" name="uname" id="" placeholder="Enter the Name" /><br /><br />
        <input type="text" name="password" id="" placeholder="Enter the password" /><br /><br />
        <button>Submit</button>
      </form>
      <h1>Details</h1>
      {details.length>0 ? 
        (details.map((item, index) => {
          return (
            <div key={index}>
              <h1>Name: {item.uname}</h1>
              <h1>Password: {item.password}</h1>
            </div>
          );
        })
      ) : (<p>No Data</p>)}
    </div>
  );
};

export default App;