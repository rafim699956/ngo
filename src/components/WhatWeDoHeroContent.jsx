import React from "react";
import whatWeDoContentImg from "../assets/images/whatWedoContentImg.png";
import SectionLabel from "../utilis/SectionLabel";

const WhatWeDoHeroContent = () => {
  return (
    <section className="bg-white pt-9 lg:pt-19 pb-12 lg:pb-24">
      <div className="container flex flex-col md:flex-row gap-10 lg:justify-between">
        <div className="lg:max-w-172.5 space-y-4 lg:space-y-8">
          <SectionLabel label="What we do" />
          <div className="lg:pl-24 space-y-4 lg:space-y-8.5">
            <h1>We are working cross country</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
        <div className="rounded-[1.25rem] overflow-hidden max-w-119 w-full">
          <img
            className="w-full h-auto object-cover"
            src={whatWeDoContentImg}
            alt="what we do content img"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHeroContent;
