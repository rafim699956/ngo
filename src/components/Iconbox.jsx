import React from "react";

const Iconbox = ({ icon, title, description }) => {
  return (
    <div className="flex gap-6 items-start">
      <img src={icon} alt="icon" />
      <div className="space-y-2">
        <h4 className="text-2xl leading-7 text-secondary">{title}</h4>
        <p className="font-normal text-base leading-[1.6rem] text-secondary-gray">{description}</p>
      </div>
    </div>
  );
};

export default Iconbox;
