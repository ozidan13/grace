import React, { useEffect, useState } from "react";
import Introduction from "components/home-page-components/introduction/introduction.component";
import MentalIllnessSection from "components/home-page-components/mental_illness_section/mental_illness_section.component";
import TherapymethodsSection from "components/home-page-components/therapy_methods_section/therapy_methods_section.component";
import FocusOnSection from "components/home-page-components/focus_on_section/focus_on_section.component";
import Footer from "components/footer/footer.component";

import "./home.styles.scss";
import axios from "axios";
function Home() {
  const [IntroductionData, setIntroductionData] = useState({});
  const [MentalIllnessSectionData, setMentalIllnessSectionData] = useState([]);
  const [TherapymethodsSectionData, setTherapymethodsSectionData] = useState(
    []
  );
  const [FocusOnSectionData, setFocusOnSectionData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((res) => {
      let {
        IntroductionInfo,
        MentalIllnessSectionInfo,
        TherapymethodsSectionInfo,
        FocusOnSectionInfo,
      } = res.data;
      setIntroductionData(IntroductionInfo);
      setMentalIllnessSectionData(MentalIllnessSectionInfo.diseases);
      setTherapymethodsSectionData(TherapymethodsSectionInfo.TherapyCards);
      setFocusOnSectionData(FocusOnSectionInfo.cards);
    });
  }, []);

  return (
    <div className="home">
      <Introduction IntroductionData={IntroductionData} />
      <MentalIllnessSection
        MentalIllnessSectionData={MentalIllnessSectionData}
      />
      <TherapymethodsSection
        TherapymethodsSectionData={TherapymethodsSectionData}
      />
      <FocusOnSection FocusOnSectionData={FocusOnSectionData} />
      <Footer />
    </div>
  );
}

export default Home;
