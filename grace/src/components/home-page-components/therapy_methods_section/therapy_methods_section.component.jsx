// react
import React from "react";
// Components
import SectionTitle from "../../section_title/section_title.component";
import TherapyCard from "./therapy_card/therapy_card.component";
// Styles css & Styled Components
import "./therapy_methods_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

const TherapymethodsSection = ({ TherapymethodsSectionData }) => {
  return (
    <>
      <div className="therapy_methods_section_container">
        <SectionTitle
          title="THERAPY METHODS"
          subTitle="There are many different types of therapies available, including Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), Interpersonal Therapy (IPT), and Acceptance and Commitment Therapy (ACT)."
        />

        <section
          className="therapy-cards"
          style={{ backgroundImage: `url(${IMAGES.therapy_methods_content})` }}
        >
          {TherapymethodsSectionData.map((item, index) => (
            <TherapyCard
              key={index}
              title={item.title}
              content={item.content}
              cardClass={item.cardClass}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default TherapymethodsSection;
