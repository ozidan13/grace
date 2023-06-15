// react
import React from "react";
// Components

// Styles css & Styled Components
import "./therapy_card.styles.scss";
// Database

const therapy_card = (props) => {
  return (
    <>
      <div className={`therapy-card ${props.cardClass}`}>
        <div className="therapy_title">
          <h1>{props.title}</h1>
        </div>
        <div className="therapy_short_content">
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default therapy_card;
