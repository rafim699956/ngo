import React from "react";
import SectionLabel from "../utilis/SectionLabel";
import Content from "./Content";
import { iconboxsData } from "../utilis/iconboxsData";
import Iconbox from "./Iconbox";
import whatwedo from "../assets/images/whatwedoimg.png"

const WhatWeDoSection = () => {
  const sectionTitle = "Some services we provide for our children";
  const des =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
  return (
    <section className="py-24 bg-primary-light">
      <div className="container space-y-4 lg:space-y-8">
        <SectionLabel label="what we do" />
        <div className="flex items-center gap-12 lg:gap-24 flex-col lg:flex-row">
          <div className="space-y-8 pl-[5.375rem]">
            <div className="space-y-4">
              <Content SectionTitle={sectionTitle} des={des} />
            </div>
            <div className="pl-6 border-l-2 border-[#E5E5E5] space-y-6 max-w-[28.75rem]">
              {iconboxsData.map((iconbox) => (
                <Iconbox
                  key={iconbox.id}
                  icon={iconbox.icon}
                  title={iconbox.title}
                  description={iconbox.description}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[30rem] shrink-0">
            <img className="w-full max-w-full object-cover" src={whatwedo} alt="what we do img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
