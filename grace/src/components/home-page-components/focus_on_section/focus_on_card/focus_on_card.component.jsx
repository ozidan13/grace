// react
import React from "react";
// Components

// Styles css & Styled Components
import "./focus_on_card.styles.scss";
// Database
import { IMAGES } from "../../../../assets/images";

const FocusOnCard = (props) => {
  return (
    <>
      <div className={`focus_on_card ${props.cardClass}`}>
        <div className="focus_on_card_title">
          <img src={IMAGES.focus_on_icon} alt="icon" />
          <h1>{props.title}</h1>
        </div>
        <div className="focus_on_card_short_content">
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default FocusOnCard;
