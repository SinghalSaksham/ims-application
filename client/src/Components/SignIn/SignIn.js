import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../actions/users";
import ResetPassword from "../ResetPassword/ResetPassword";
import Register from "../ResetPassword/ResetPassword";

const SignIn = () => {
  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(formData, navigate));
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>SignIn</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              value={formData.email}
              type="email"
              name="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              value={formData.password}
              type="password"
              name="password"
              className="form-control"
              id="InputPassword"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-3">
              Sign In
            </button>
          </div>
          <div className="text-center">
            <Link to="/reset">
              <p>Forgot Password</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
