import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import Category from "./Components/Category/Category";
import User from "./Components/User/User";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

function App() {
  const user = useSelector((state) => state.users);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {user.authData ? (
            <Route path="/category" element={<Category />}></Route>
          ) : (
            <Route path="/category" element={<Error />}></Route>
          )}
          {user.authData ? (
            <Route path="/user" element={<User />}></Route>
          ) : (
            <Route path="/user" element={<Error />}></Route>
          )}
          {user.authData ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<Error />}></Route>
          )}
          <Route path="/auth" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<ResetPassword />}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
