import React from "react";

const ChartSection = () => {
  const donations = [
    {
      id: 1,
      bg: "#BEF3C0",
      label: "child care home",
      percentage: 40,
    },
    {
      id: 2,
      bg: "#AC94F1",
      label: "cleanliness program",
      percentage: 35,
    },
    {
      id: 3,
      bg: "#FFF0CA",
      label: "helping people",
      percentage: 10,
    },
    {
      id: 4,
      bg: "#F9CF64",
      label: "excursions",
      percentage: 10,
    },
    {
      id: 5,
      bg: "#F38FBF",
      label: "feeding the poor",
      percentage: 5,
    },
  ];
  let startAngle = 0;
  const gradientSegments = donations.map((donation) => {
    const endAngle = startAngle + donation.percentage * 3.6;
    const segment = `${donation.bg} ${startAngle}deg ${endAngle}deg`;
    startAngle = endAngle;
    return segment;
  });
  const gradient = `conic-gradient(${gradientSegments.join(", ")})`;
  return (
    <section className="bg-black py-12 lg:py-24">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="flex flex-col gap-4 lg:max-w-[39.5rem]">
          <h2 className="text-white">
            How we spend your donations and where it goes
          </h2>
          <p className="text-white/60">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {donations.map((donation) => (
              <div key={donation.id} className="flex items-center gap-2">
                <div
                  className="size-4 rounded"
                  style={{ background: `${donation.bg}` }}
                ></div>
                <h5 className="text-white text-base leading-[1.6rem] font-medium">
                  <span>{donation.percentage}% </span>
                  child care home
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className="size-[18.5rem] lg:size-[23.438rem] rounded-full bg-white relative overflow-hidden flex before:absolute before:size-[11.718rem] before:bg-black before:rounded-full before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 gradient-conic">
          <div className="w-full" style={{ background: gradient }}></div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
