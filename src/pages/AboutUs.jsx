import React from "react";
import OurMissionVision from "../components/OurMissionVision";
import OurEventSection from "../components/OurEventSection";
import OurTeam from "../components/OurTeam";
import AwardSection from "../components/AwardSection";
import OurJourney from "../components/OurJourney";
import AboutUsAboutSection from "../components/AboutUsAboutSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsAboutSection />
      <OurMissionVision />
      <AwardSection />
      <OurJourney />
      <OurTeam />
      <OurEventSection />
    </>
  );
};

export default AboutUs;
