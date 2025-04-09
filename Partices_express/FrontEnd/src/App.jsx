import React, { useState } from 'react'

const App = () => {
  let [state,setState]=useState({
    uname:"",
    password:"",
    confirm:""
  })
  let {uname,password,confirm}=state
  return (
    <div>
      <form action="">
        Name: <input type="text" name="uname" value={uname} id="" /> <br />
        Password: <input type="text" name="password" value={password} id="" /> <br />
        ConfirmPassword: <input type="text" name="confirm" value={confirm} id="" /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App