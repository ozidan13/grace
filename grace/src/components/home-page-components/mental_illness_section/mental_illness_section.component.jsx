// react
import React from "react";
// Components
import SectionTitle from "../../section_title/section_title.component";
import IllnessCard from "./illness_card/illness_card.component";
// Styles css & Styled Components
import "./mental_illness_section.styles.scss";
// Database
import { IMAGES } from "../../../assets/images";

const MentalIllnessSection = ({ MentalIllnessSectionData }) => {
  return (
    <>
      <div className="mental_illness_section_container">
        <SectionTitle
          title="Types of mental illness"
          subTitle="There are several types of mental illnesses that can be treated using various therapeutic approaches. 
Here are four examples"
        />
        <section className="illness-cards">
          {MentalIllnessSectionData.map((item, index) => {
            return (
              <IllnessCard key={index} title={item.title} content={item.body} />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default MentalIllnessSection;
