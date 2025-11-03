import React from "react";

const Award = ({ awardImg, awardYear, awardName, awardCountry }) => {
  return (
    <div className="flex flex-col gap-4 shrink items-center justify-center">
      <div className="h-[5.75rem] w-[6.938rem]">
        <img
          className="h-full w-full object-cover"
          src={awardImg}
          alt={awardName}
        />
      </div>
      <div className="text-center space-y-1">
        <h4 className="text-2xl leading-[2.4rem] text-secondary ">{awardYear}</h4>
        <p className="font-bold text-secondary text-base leading-[1.6rem]">{awardName}</p>
        <p className="font-medium text-xs text-secondary/60 leading-[1.2rem]">{awardCountry}</p>
      </div>
    </div>
  );
};

export default Award;
