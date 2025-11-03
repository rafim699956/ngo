import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const TeamMember = ({ img, imgalt, name, designation }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-[1.25rem] min-h-[18.5rem]">
        <img className="w-full h-full object-cover" src={img} alt={imgalt} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-medium text-[1.25rem] leading-8 text-center text-secondary">
          {name}
        </h3>
        <p className="font-medium text-xs leading-[1.2rem]">{designation}</p>
        <div className="pt-2 flex items-center justify-center gap-5">
          <Link to="#" className="text-[1.25rem]">
            <FaFacebook className="text-secondary" />
          </Link>
          <Link to="#" className="text-[1.25rem]">
            <FaTwitter className="text-secondary" />
          </Link>
          <Link to="#" className="text-[1.25rem]">
            <FaLinkedin className="text-secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
