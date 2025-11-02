import React from "react";
import Event from "./Event";
import { events } from "../utilis/events";

const OurEvents = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-12">
      <div className="flex gap-6 items-center">
        <h3 className="text-secondary text-[2.5rem] font-medium leading-[3.5rem]">
          Our Events
        </h3>
        <p className="grow border-t border-[#E5E5E5] tracking-[0.125rem]"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Event key={event.id} date={event.date} title={event.title} />
        ))}
      </div>
    </div>
  );
};

export default OurEvents;
