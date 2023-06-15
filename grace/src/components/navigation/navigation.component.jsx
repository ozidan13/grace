import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import { IMAGES } from "assets/images";

function Navigation({ userData }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar p-3">
        <div className="navbar-logo">
          <a href="#">
            <img src={IMAGES.logo} alt="grace-logo" />
          </a>
        </div>
        <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            {userData &&
            userData.isAdmin !== true &&
            localStorage.getItem("token") ? (
              <>
                <li className="navbar-item">
                  <Link to="/articles" className="nav-link">
                    Articles
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li className="navbar-item">
              <Link to="/aboutus" className="nav-link">
                About
              </Link>
            </li>
            {userData &&
            userData.isAdmin === true &&
            localStorage.getItem("token") ? (
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}

            {!localStorage.getItem("token") ? (
              <>
                <li className="navbar-item">
                  <Link to="/signin" className="nav-link">
                    login
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">
                    signup
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {userData &&
            userData.isAdmin !== true &&
            localStorage.getItem("token") ? (
              <li className="navbar-item">
                <Link to="/profile" className="nav-link">
                  profile
                </Link>
              </li>
            ) : (
              ""
            )}

            {localStorage.getItem("token") ? (
              <>
                <li className="navbar-item">
                  <span
                    onClick={() => {
                      localStorage.clear();
                      navigate("/signin");
                    }}
                    role="button"
                    className="nav-link pointer text-white"
                  >
                    sign out
                  </span>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
