import React from "react";
import BannerHome from "../components/BannerHome";
import AboutUs from "../components/AboutUsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ProjectSection from "../components/ProjectSection";
import ChartSection from "../components/ChartSection";
import OurEventSection from "../components/OurEventSection";

const Home = () => {
  return (
    <>
      <BannerHome />
      <AboutUs />
      <WhatWeDoSection />
      <ProjectSection />
      <ChartSection />
      <OurEventSection />
    </>
  );
};

export default Home;
