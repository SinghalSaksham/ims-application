import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const user = { name: "Saksham" };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 d-flex"
              style={{ width: "100%" }}
            >
              {!user ? (
                <>
                  <Link to="/auth" className="navbarStyle m-2 ms-auto ">
                    <li className="nav-item">SignIn</li>
                  </Link>
                  <Link to="/register" className="navbarStyle m-2 ">
                    <li>Register</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="navbarStyle m-2 ">
                    <li className="nav-item">Home</li>
                  </Link>
                  <Link to="/category" className="navbarStyle m-2">
                    <li>Category</li>
                  </Link>
                  <Link to="/user" className="navbarStyle m-2">
                    <li>User</li>
                  </Link>
                  {/* <button className="navbarStyle m-2 ms-auto btn">
                    SignOut
                  </button> */}
                  <button
                    class="btn btn-dark my-2 my-sm-0 ms-auto"
                    onClick={logout}
                  >
                    SignOut
                  </button>
                  {/* <Link > */}
                  {/* <li onClick={logout}>SignOut</li> */}
                  {/* </Link> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
