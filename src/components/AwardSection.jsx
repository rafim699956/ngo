import React from "react";
import { awards } from "../utilis/awards";
import Award from "./Award";

const AwardSection = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container space-y-6 lg:space-y-12">
        <h2 className="text-secondary text-center">Awards & Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <Award
              key={award.id}
              awardImg={award.awardImg}
              awardYear={award.year}
              awardName={award.awardName}
              awardCountry={award.awardCountry}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
