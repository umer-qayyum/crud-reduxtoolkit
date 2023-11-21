import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [users,setUsers]=useState({});
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getUsers=(e)=>{
        setUsers({
            ...users,
            [e.target.name]:e.target.value,
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("users-->",users);
        dispatch(createUser(users));
        navigate("/read");
    }
  return (
    <>
      <div>
        <h2 className="my-2">Fill the data</h2>
        <form className="w-50 mx-auto my-3 p-5 border bg-white " style={{borderRadius:"5px"}} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              style={{backgroundColor:"lightgray"}}
              className="form-control"
              onChange={getUsers}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              style={{backgroundColor:"lightgray"}}
              className="form-control"
              onChange={getUsers}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="age"
              style={{backgroundColor:"lightgray"}}
              className="form-control"
              onChange={getUsers}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-check-input mx-2"
              name="gender"
              value="Male"
              type="radio"
              style={{backgroundColor:"lightgray"}}
              onChange={getUsers}
              required
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input mx-1"
              name="gender"
              value="Female"
              style={{backgroundColor:"lightgray"}}
              type="radio"
              onChange={getUsers}
            />
            <label className="form-check-label">Female</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
