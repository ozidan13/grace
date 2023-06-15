// react
import React from "react";
// MUI Components

// Styles css & Styled Components
import "./story_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

function StorySection({ story }) {
  return (
    <>
      <div className="story_container">
        <section className="storty_section_content">
          <h1> {story.title}</h1>
          <p>{story.body1}</p>
          <p>{story.body2}</p>
          <p>{story.body3}</p>
        </section>
        <section className="story_section_image">
          <img src={IMAGES.story_section_image} alt="story_section" />
        </section>
      </div>
    </>
  );
}

export default StorySection;
