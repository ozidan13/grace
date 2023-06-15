// react
import React from "react";
// material ui

// Assets
import { IMAGES } from "../../assets/images";
import "./footer.styles.scss";

function Footer() {
  return (
    <>
      <div className="footer-component">
        <div className="footer-sections">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/aboutus">ABOUT</a>
            </li>
            <li>
              <a href="/signin">SIGNIN</a>
            </li>
            <li>
              <a href="/signup">SIGN UP</a>
            </li>
          </ul>
          <div class="footer-contact">
            <ul>
              <li>
                <img src={IMAGES.message} alt="+20-1026454497" />
                <a href="tel:01026454497">+20-1026454497</a>
              </li>
              <li>
                {" "}
                <img src={IMAGES.telephone} alt="graceproject2000@gmail.com" />
                <a href="mailto:graceproject2000@gmail.com">
                  graceproject2000@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>©Mental Health Copyright 2023. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
