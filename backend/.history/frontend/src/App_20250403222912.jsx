import React from 'react'

const App = () => {
  let [details, setDetails] = React.useState({
    uname: "",
    password: ""
  })
 
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