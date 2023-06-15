// react
import React from "react";
// Components

// Styles css & Styled Components
import "./illness_card.styles.scss";
// Database
import { IMAGES } from "../../../../assets/images";

const IllnessCard = (props) => {
  return (
    <>
      <div className="illness-card">
        <div className="illness_title">
          <img src={IMAGES.main_icon} alt="icon" />
          <h1>{props.title}</h1>
        </div>
        <div className="illness_short_content">
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default IllnessCard;
