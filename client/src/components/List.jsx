import React, { useEffect, useState } from "react";
import axios from "../axios/axios.js";

const List = () => {
  let [tasks, setTasks] = useState([]);

  let fetchTasks = async () => {
    let response = await axios.get("/");
    console.log(response.data);

    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>sl no</th>
            <th>task</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((doc, index) => (
            <tr key={doc._id}>
              <td>{index + 1}</td>
              <td>{doc.task}</td>
              <td>update</td>
              <td>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
