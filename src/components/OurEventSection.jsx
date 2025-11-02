import React from "react";
import OurEvents from "./OurEvents";
import DonateForSpecialNeeds from "./DonateForSpecialNeeds";

const OurEventSection = () => {
  return (
    <section className="bg-white pt-12 lg:pt-24 pb-10 lg:pb-[5.25rem]">
      <div className="container flex flex-col gap-10 lg:gap-[5.25rem]">
        <DonateForSpecialNeeds />
        <OurEvents />
      </div>
    </section>
  );
};

export default OurEventSection;
