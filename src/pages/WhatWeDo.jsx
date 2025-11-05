import React from "react";
import WhatWeDoSpecialNeeds from "../components/WhatWeDoSpecialNeeds";
import ProjectSection from "../components/ProjectSection";
import OurEventSection from "../components/OurEventSection";
import WhatWeDoHeroContent from "../components/WhatWeDoHeroContent";

const WhatWeDo = () => {
  return (
    <>
    <WhatWeDoHeroContent />
      <WhatWeDoSpecialNeeds />
      <ProjectSection />
      <OurEventSection />
    </>
  );
};

export default WhatWeDo;
