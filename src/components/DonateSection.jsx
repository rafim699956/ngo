import React from "react";
import whatWeDoContentImg from "../assets/images/donate.png";
import SectionLabel from "../utilis/SectionLabel";

const DonateSection = () => {
  return (
    <section className="bg-primary-light pt-9 lg:pt-19 pb-12 lg:pb-24">
      <div className="container flex flex-col md:flex-row gap-10 lg:justify-between">
        <div className="lg:max-w-157 space-y-4 lg:space-y-8">
          <SectionLabel label="Donate" />
          <div className="lg:pl-24 flex flex-col gap-3.5">
            <h1>Making a donation for our children.</h1>
            <p className="max-w-[32.313rem]">
              When you donate, you’re supporting effective care to children with
              special needs—an investment in the leaders of tomorrow.
            </p>
            <div className="pt-4.5">
              <button className="btn btn-primary">Donate now</button>
            </div>
          </div>
        </div>
        <div className="rounded-[1.25rem] overflow-hidden max-w-120 w-full">
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

export default DonateSection;
