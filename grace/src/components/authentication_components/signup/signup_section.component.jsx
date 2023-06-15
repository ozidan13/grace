// react
import React, { useState } from "react";
// MUI Components

// Styles css & Styled Components
import "./signup_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password, username, age };
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.email) {
        alert(`User ${result.email}  created successfully`);
        window.location.href = "/signin";
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <img src={IMAGES.side_effects} alt="" className="sideeffect" />
      <div className="signup_container">
        <form className="signup_form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form_group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={username}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
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
          <div className="form_group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              required
              value={Number(age)}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className="form_links">
            <a href="/signin">Sign in</a>
          </div>
          <div className="form_group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
