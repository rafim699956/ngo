import React from "react";
import { Link } from "react-router";

const Project = ({ bg, title, description }) => {
  return (
    <div
      className="pt-20 p-12 rounded-[1.25rem] overflow-hidden min-h-[26.313rem] flex flex-col justify-between gap-4 bg-no-repeat bg-cover bg-center z-10 relative before:absolute before:inset-0 before:bg-black/60 before:-z-10"
      style={{ background: `url(${bg})` }}
    >
      <div className="space-y-4">
        <h3 className="text-white">{title}</h3>
        <p className="font-normal text-base leading-[1.6rem] text-white">
          {description}
        </p>
      </div>
      <div>
        <Link className="btn btn-white">Learn more</Link>
      </div>
    </div>
  );
};

export default Project;
