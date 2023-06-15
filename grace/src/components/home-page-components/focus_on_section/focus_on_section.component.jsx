// react
import React from "react";
// Components
import SectionTitle from "../../section_title/section_title.component";
import FocusOnCard from "./focus_on_card/focus_on_card.component";
// Styles css & Styled Components
import "./focus_on_section.styles.scss";
// Database

const FocusOnSection = ({ FocusOnSectionData }) => {
  return (
    <>
      <div className="focus_on_section_container">
        <SectionTitle title="WE WILL FOCUS ON" subTitle="" />

        <section className="focus_on_cards">
          {FocusOnSectionData.map((item, index) => (
            <FocusOnCard key={index} title={item.title} content={item.body} />
          ))}
        </section>
      </div>
    </>
  );
};

export default FocusOnSection;
