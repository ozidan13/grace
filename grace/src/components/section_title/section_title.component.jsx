// react
import React from "react";
// Styles css & Styled Components
import "./section_title.styles.scss";

const SectionTitle = (props) => {
  return (
    <>
      <div className="section-title-container">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
    </>
  );
};

export default SectionTitle;
