import React, { useEffect, useState } from "react";
import AboutUsSection from "components/aboutus-components/about_us_section/about_us_sectiont.component";
import StorySection from "components/aboutus-components/story_section/story_section.component";
import WhoWeSection from "components/aboutus-components/who_we_section/who_we_section.component";
import PersonsSection from "components/aboutus-components/persons_section/persons_section.component";

// styles
import "./aboutus.styles.scss";
import axios from "axios";
import Footer from "components/footer/footer.component";

function AboutUs() {
  const [about, setAbout] = useState({});
  const [story, setStory] = useState({});
  const [who, setWho] = useState({});
  const [persons, setPersons] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/about").then((res) => {
      let { aboutSection, storySection, whoWeSection, personsSection } =
        res.data;
      setAbout(aboutSection);
      setStory(storySection);
      setWho(whoWeSection);
      setPersons(personsSection);
    });
  }, []);

  return (
    <div className="aboutus">
      <AboutUsSection about={about} />
      <StorySection story={story} />
      <WhoWeSection who={who} />
      <PersonsSection persons={persons} />
      <Footer />
    </div>
  );
}

export default AboutUs;
