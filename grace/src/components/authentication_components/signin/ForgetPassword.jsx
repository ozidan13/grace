// react
import React, { useState } from "react";
import axios from "axios";
// MUI Components

// Styles css & Styled Components
import "./signin_section.styles.scss";
import { useNavigate } from "react-router-dom";
// Database
function ForgetPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/forgetPassword",
                { email }
            );
            alert('password sent in your email')
            navigate('/signin')
            // handle response data here
        } catch (error) {
            console.error(error); // handle error here
        }
    };
    return (
        <div className="signin_container ">
            <form className="signin_form" onSubmit={handleSubmit}>
                <h2>Forget password</h2>
                <div className="form_group">
                    <label htmlFor="email">Enter your Email</label>
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
                    <button type="submit">send message</button>
                </div>
            </form>
        </div>
    );
}

export default ForgetPassword;