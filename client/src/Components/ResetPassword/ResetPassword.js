import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword, passwordUpdate } from "../../actions/users";

const ResetPassword = () => {
  const initialState = { email: "", otp: "", password: "" };
  const [changePassword, setChangePassword] = useState(false);
  const [verifyInitiate, setVerifyInitiate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email: inputData.email };
    dispatch(resetPassword(data));
    setVerifyInitiate(true);
    // navigate("/changePassword");
  };

  const handleChange = (event) => {
    // setemailData(event.target.value);
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const handleVerify = (event) => {
    event.preventDefault();
    setChangePassword(true);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    dispatch(passwordUpdate(inputData, navigate));
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="card container my-5 py-5 px-3" style={{ width: "25rem" }}>
        <div className="text-center">
          <h1>Reset Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              value={inputData.email}
              type="email"
              name="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              onChange={handleChange}
              required
            />
            {verifyInitiate && (
              <p>
                OTP Sent.Please Check your email to recieve the OTP. Please wait
                for some time if you have not yet recieved.
              </p>
            )}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Send OTP
            </button>
          </div>
        </form>
        <form onSubmit={handleVerify}>
          <div className="mb-3 mt-2">
            <label htmlFor="otp" className="form-label">
              Enter the OTP
            </label>
            <input
              value={inputData.otp}
              type="number"
              name="otp"
              className="form-control"
              id="otp"
              aria-describedby="otpHelp"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Verify
            </button>
          </div>
        </form>
        {changePassword && (
          <form onSubmit={handleChangePassword}>
            <div className="mb-3 mt-2">
              <label htmlFor="password" className="form-label">
                Enter New Password.
              </label>
              <input
                value={inputData.password}
                type="password"
                name="password"
                className="form-control"
                id="password"
                aria-describedby="otpHelp"
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Change Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
