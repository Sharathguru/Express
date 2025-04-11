import React from "react";
import axios from '../axios/axios.js'
const Create = () => {
    const handleSubmit=async (e)=>{
    e.preventDefault()
        let task=e.target.firstChild.value
        await axios.post("/",{task})
        e.target.firstChild.value=""
    }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task"/>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
