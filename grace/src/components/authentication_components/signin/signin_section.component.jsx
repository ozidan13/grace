// react
import React, { useState } from "react";
// MUI Components

// Styles css & Styled Components
import "./signin_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";

function Signin({ saveUserInformation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.token) {
        if (result.answerQuestuions === true) {
          localStorage.setItem("type", result.disease);
          localStorage.setItem("answerQuestuions", result.answerQuestuions);
        }
        localStorage.setItem("token", result.token);
        let userInfo = saveUserInformation();
        if (userInfo.isAdmin === true) {
          navigate("/dashboard");
        } else {
          navigate("/articles");
        }
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <img src={IMAGES.side_effects} alt="" className="sideeffect" />
      <div className="signin_container">
        <form className="signin_form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form_links">
            <Link to={"/forgetPaswword"}>Forgot Password?</Link>
            <span> | </span>
            <a href="/signup">Sign Up</a>
          </div>
          <div className="form_group">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
