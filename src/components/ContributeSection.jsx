import React, { useState } from "react";
import DonateForSpecialNeeds from "./DonateForSpecialNeeds";

const ContributeSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabBtns = document.querySelectorAll(".tabBtn");
  tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabBtn.classList.add("active");
    });
  });

  return (
    <section className="bg-white pt-12 lg:pt-24 pb-10 lg:pb-20">
      <div className="container flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2>How you can contribute to caring for our kids</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div>
              {/* tab button  */}
              <button
                onClick={() => setActiveTab("overview")}
                className="tabBtn active py-2 px-6 font-roboto font-medium text-base leading-[1.6rem] text-secondary border-b border-[#E5E5E5] transition-all duration-300 ease-linear"
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className="tabBtn py-2 px-6 font-roboto font-medium text-base leading-[1.6rem] text-secondary border-b border-[#E5E5E5] transition-all duration-300 ease-linear"
              >
                Impact
              </button>
              <button
                onClick={() => setActiveTab("whatYouGet")}
                className="tabBtn py-2 px-6 font-roboto font-medium text-base leading-[1.6rem] text-secondary border-b border-[#E5E5E5] transition-all duration-300 ease-linear"
              >
                What You get
              </button>
              {/* tab button  */}
            </div>
            <div className="pt-6">
              {activeTab === "overview" && (
                <div className="flex flex-col gap-8">
                  <p>
                    1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              )}
              {activeTab === "impact" && (
                <div className="flex flex-col gap-8">
                  <p>
                    Impact Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Neque quod in dolores assumenda doloribus, ipsum
                    voluptatibus mollitia ab porro. Tempore nesciunt quae sunt
                    quasi facere laudantium! Dolor non vel eos?
                  </p>
                  <p>
                    Impact Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              )}
              {activeTab === "whatYouGet" && (
                <div className="flex flex-col gap-8">
                  <p>
                    What You get Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    What You get Aenean faucibus nibh et justo cursus id rutrum
                    lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="w-full border-t-[#E5E5E5]" />
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <h2 className="lg:max-w-93.5 w-full">How we use your donation</h2>
          <p className="lg:max-w-84.5 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className="lg:max-w-93.5 w-full">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet.
          </p>
        </div>
        <DonateForSpecialNeeds />
      </div>
    </section>
  );
};

export default ContributeSection;
