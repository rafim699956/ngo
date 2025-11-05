import React from "react";
import ourMissionbg from "../assets/images/ourmissionbg.png";
import OurSupporter from "./OurSupporter";
import { IoMdPlayCircle } from "react-icons/io";


const OurMissionVision = () => {
  return (
    <section className="bg-primary-light py-12 lg:py-24 pt-0 lg:pt-0">
      <div className="container flex flex-col gap-12 lg:gap-24">
        <div className="rounded-[1.25rem] overflow-hidden relative before:absolute before:inset-0 before:bg-black/40 before:z-10 -mt-28 lg:-mt-56">
          <img className="w-full h-56 lg:h-112 object-cover" src={ourMissionbg} alt="our mision img" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"><IoMdPlayCircle className="text-[4rem] fill-white stroke-secondary" /></button>
        </div>
        <div className="max-w-272 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-2">
            <h5 className="font-roboto font-medium text-base leading-[1.188rem] text-secondary uppercase">
              our mission
            </h5>
            <h3 className="pt-2">
              We make sure to provide inclusive care for children with special
              needs
            </h3>
            <p className="text-secondary/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-roboto font-medium text-base leading-[1.188rem] text-secondary uppercase">
              our Vision
            </h5>
            <h3 className="pt-2">
              Provide more inclusive care to children around the world
            </h3>
            <p className="text-secondary/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <OurSupporter />
      </div>
    </section>
  );
};

export default OurMissionVision;
