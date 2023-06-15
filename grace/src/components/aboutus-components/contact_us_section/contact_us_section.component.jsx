// react
import React, { useState } from "react";
import "./contact_us_section.styles.scss";

// Assets
import { IMAGES } from "../../../assets/images";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, message });
  };

  return (
    <>
      <div
        className="contact-us-section-form-container"
        style={{
          backgroundImage: `url(${IMAGES.form_bg})`,
          backgroundSize: `100%`,
        }}
      >
        <div className="contact-us-section-form">
          <h1 style={{ color: "#DD9326" }}>Get In Touch</h1>
          <h4>Feel free to drop us a line below!</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-fields">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone"
              />
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", height: "113px" }}
              placeholder="Message"
            />
            <button className="submit-button" type="submit">
              Send The Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
