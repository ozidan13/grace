// react
import React from "react";
// MUI Components

// Styles css & Styled Components
import "./about_us_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

function AboutUsSection({ about }) {
  return (
    <>
      <div
        className="aboutus_container"
        style={{ backgroundImage: `url(${IMAGES.side_effects})` }}
      >
        <h1>{about.title}</h1>
        <p>{about.body}</p>
      </div>
    </>
  );
}

export default AboutUsSection;
