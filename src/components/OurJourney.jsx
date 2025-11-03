import React from "react";
import ourJourney from "../assets/images/ourjourney.png";

const OurJourney = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="bg-primary rounded-[1.25rem] pl-12 lg:pl-24 py-8 lg:py-16 pr-5 lg:pr-9 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-roboto font-bold text-base leading-[1.188rem] text-secondary uppercase tracking-[0.125rem]">
              OUR JOURNEY
            </p>
            <h2 className="text-black">How we raised 34M</h2>
            <p className="text-black/60 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh.
            </p>
          </div>
          <div className="rounded-[1.25rem] overflow-hidden lg:max-w-[38.25rem] shrink-0">
            <img
              className="w-full h-full object-cover"
              src={ourJourney}
              alt="ourJourney"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
