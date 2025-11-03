import React from "react";
import SectionLabel from "../utilis/SectionLabel";
import Content from "./Content";
import aboutimg from "../assets/images/aboutimg.png"
import { Link } from "react-router";
import OurSupporter from "./OurSupporter";

const AboutUsSection = () => {
  const SectionTitle = "We provide a place for children with special needs";
  const shortDes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  const des = '‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  return (
    <section className="py-12 lg:pt-[5.375rem] lg:pb-[4.625rem] bg-white">
      <div className="container space-y-8 lg:space-y-16">
        <div className="flex gap-10 lg:gap-[5.375rem] flex-col lg:flex-row lg:items-end ">
          <div className="flex flex-col gap-8 lg:pb-[1.896rem]">
            <SectionLabel label="Know About us" />
            <div className="lg:pl-24 flex flex-col gap-4 lg:gap-8">
              <Content SectionTitle={SectionTitle} shortDes={shortDes} des={des} />
              <div className="lg:pt-4">
              <Link to="/" className="btn btn-primary">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30rem] shrink-0">
            <img className="w-full max-w-full" src={aboutimg} alt="about img" />
          </div>
        </div>
        <OurSupporter />
      </div>
    </section>
  );
};

export default AboutUsSection;
