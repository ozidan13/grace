// react
import React from "react";
// MUI Components

// Styles css & Styled Components
import "./who_we_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

function WhoWeSection({ who }) {
  return (
    <>
      <div className="who_we_section_container">
        <section className="who_we_section_image">
          <img src={IMAGES.who_we_section_image} alt="who_we_section" />
        </section>

        <section className="who_we_section_content">
          <h1>{who.title}</h1>
          <p>{who.body1}</p>
          <p>{who.body2}</p>
        </section>
      </div>
    </>
  );
}

export default WhoWeSection;
