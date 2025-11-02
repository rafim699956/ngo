import React from "react";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";

const Event = ({date, title}) => {
  return (
    <div className="bg-primary pt-8 pr-12 pb-10 pl-10 rounded-[1.25rem] flex gap-6">
      <div className="shrink-0">
        <h3 className="font-medium h2">{date}</h3>
        <span className="font-roboto font-medium text-base leading-[1.188rem] text-secondary uppercase tracking-[0.125rem]">apr</span>
      </div>
      <div className="grow flex items-center gap-6">
        <div className="grow flex flex-col gap-2">
          <div className="flex items-center gap-6">
            <p className="font-roboto font-medium text-base leading-[1.188rem] text-secondary uppercase tracking-[0.125rem]">
              Next Events
            </p>
            <span className="border-b-2 border-secondary w-11"></span>
          </div>
          <h3><Link to="#">{title}</Link></h3>
        </div>
        <div className="shrink-0">
          <Link to="#" className="size-14 rounded-full bg-white flex items-center justify-center"><BsArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
