import React from "react";
import bannerImg from "../assets/images/bannerhome.png";
import playIcon from "../assets/images/playicon.png";
import { Link } from "react-router";
import OurSupporter from "./OurSupporter";

const BannerHome = () => {
  return (
    <section
      className="pt-[6.75rem] pb-[4rem] relative z-10 after:absolute after:inset-0 after:bg-black/60 after:-z-10 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container flex flex-col gap-[12rem]">
        <div className="max-w-[40rem] flex flex-col gap-12">
          <h1 className="text-white text-[4rem] leading-[4.8rem]">Inclusive care for children with special needs</h1>
          <div className="flex gap-6">
            <Link className="btn btn-white" to="/what-we-do">What we do</Link>
            <button className="btn py-3 px-4 text-white">{playIcon && <img src={playIcon} alt="play icon"/>} Play Video</button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p className="font-roboto font-medium text-lg leading-[1.313rem] text-white">230 children under our care</p>
          <p className="grow border-t border-white"></p>
          <p className="font-roboto font-medium text-lg leading-[1.313rem] text-white">58 donations collected</p>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
