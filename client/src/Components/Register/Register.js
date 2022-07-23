import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/users";

const Register = () => {
  const initialState = { name: "", email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(formData, navigate));
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputName" className="form-label">
              Name
            </label>
            <input
              value={formData.name}
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
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              type="password"
              className="form-control"
              id="InputPassword"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
