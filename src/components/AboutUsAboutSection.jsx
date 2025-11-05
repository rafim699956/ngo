import React from "react";
import SectionLabel from "../utilis/SectionLabel";

const AboutUsAboutSection = () => {
  return (
    <section className="bg-white pt-10 lg:pt-19 pb-28 lg:pb-56">
      <div className="container flex flex-col lg:flex-row gap-5 pb-17.5">
        <div className="space-y-8 lg:max-w-203.5 shrink-0">
          <SectionLabel label="Know about us" />
          <h1 className="lg:pl-24">We are a non-governmental organization</h1>
        </div>
        <div className="grow space-y-0.5">
          <h4>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </h4>
          <p className="text-secondary/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsAboutSection;
