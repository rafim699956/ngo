import React from "react";
import { logos } from "../utilis/logos";

const OurSupporter = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex gap-6 items-center">
        <p className="font-roboto font-medium text-base leading-[1.188rem] text-secondary uppercase">
          our Supporters
        </p>
        <p className="grow border-t border-[#E5E5E5] tracking-[0.125rem]"></p>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center gap-[6.019rem] marquee-animation">
          {logos.map((logo) => (
            <img key={logo.id} src={logo.imgPath} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSupporter;
