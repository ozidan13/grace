// react
import React from "react";
// MUI Components

// Styles css & Styled Components
import "./introduction.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

function Introduction({ IntroductionData }) {
  return (
    <>
      <div
        className="introduction_container"
        style={{ backgroundImage: `url(${IMAGES.side_effects})` }}
      >
        <div className="intro_section">
          <section className="hero_content">
            <div className="hero_title">
              <div className="title-container">
                <img src={IMAGES.main_icon} alt="" />
                <h1>INTRODUCTION</h1>
              </div>
              <h3>{IntroductionData.title}</h3>
            </div>
            <p>{IntroductionData.body}</p>
            <button>
              <a href="/signin">Discover Now</a>
            </button>
          </section>
          <section className="hero_main_image">
            <img src={IMAGES.hero_main_image} alt="" />
          </section>
        </div>
      </div>
    </>
  );
}

export default Introduction;
