import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  let [details, setDetails] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
           axios.get("http://localhost:3000/api/task")
      } catch (error) {
        
      }
    }
  return (
    <div>
      <h1>Signup</h1>
      <form action="">
        <input type="text" name="uname" id="" placeholder='Enter the Name'/><br /><br />
        <input type="text" name="password" id="" placeholder='Enter the password' /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App