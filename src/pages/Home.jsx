import React from "react";
import BannerHome from "../components/BannerHome";
import AboutUs from "../components/AboutUsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ProjectSection from "../components/ProjectSection";
import ChartSection from "../components/ChartSection";

const Home = () => {
  return (
    <>
      <BannerHome />
      <AboutUs />
      <WhatWeDoSection />
      <ProjectSection />
      <ChartSection />
    </>
  );
};

export default Home;
