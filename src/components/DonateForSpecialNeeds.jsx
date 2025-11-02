import React from "react";
import bg from "../assets/images/donateforspecialneeds.png";
import { Link } from "react-router";

const DonateForSpecialNeeds = () => {
  return (
    <div
      className="p-6 lg:p-[5.75rem] bg-no-repeat bg-center bg-cover rounded-2xl relative overflow-hidden z-10 before:absolute before:inset-0 before:bg-black/50 before:-z-10"
      style={{ backgroundImage: `url(${bg})`}}
    >
      <div className="max-w-[50.313rem] mx-auto space-y-8">
        <h2 className="text-center text-white">
          You can contribute to provide a place for children with special needs!
        </h2>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Link to="/" className="btn btn-primary text-secondary font-medium hover:text-white">Join as a volunteer</Link>
          <Link to="/donation" className="btn btn-white font-medium">Donate</Link>
        </div>
      </div>
    </div>
  );
};

export default DonateForSpecialNeeds;
