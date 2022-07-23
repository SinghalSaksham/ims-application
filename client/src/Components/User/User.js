import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../actions/users";

const User = () => {
  const { authData } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    name: authData.result.name,
    email: authData.result.email,
    old_email: authData.result.email,
    old_password: "",
    new_password: "",
  };

  const [inputData, setInputData] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUser(inputData, navigate));
  };
  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>Edit Details</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputName" className="form-label">
              Name
            </label>
            <input
              value={inputData.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
              id="InputName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              value={inputData.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </form>
        <div className="text-center">
          <h1>Change Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="old_Password" className="form-label">
              Old Password
            </label>
            <input
              value={inputData.password}
              name="old_password"
              onChange={handleChange}
              type="password"
              className="form-control"
              id="old_Password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="new_Password" className="form-label">
              New Password (*Should not be same as old password)
            </label>
            <input
              value={inputData.password}
              name="new_password"
              onChange={handleChange}
              type="password"
              className="form-control"
              id="new_Password"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
