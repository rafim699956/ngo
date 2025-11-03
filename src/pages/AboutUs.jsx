import React from "react";
import OurMissionVision from "../components/OurMissionVision";
import OurEventSection from "../components/OurEventSection";
import OurTeam from "../components/OurTeam";
import AwardSection from "../components/AwardSection";
import OurJourney from "../components/OurJourney";

const AboutUs = () => {
  return (
    <>
      <AwardSection />
      <OurJourney />
      <OurTeam />
      <OurMissionVision />
      <OurEventSection />
    </>
  );
};

export default AboutUs;
