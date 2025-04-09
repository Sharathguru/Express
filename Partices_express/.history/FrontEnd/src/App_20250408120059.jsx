import React, { useState } from 'react'

const App = () => {
  let [state,setState]=useState({
    name
  })
  return (
    <div>
      <form action="">
        Name: <input type="text" name="uname" id="" />
        Password: <input type="text" name="password" id="" />


      </form>
    </div>
  )
}

export default App