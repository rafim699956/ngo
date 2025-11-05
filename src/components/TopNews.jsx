import React from "react";
import SectionLabel from "../utilis/SectionLabel";
import { Link } from "react-router";
import { topNewses } from "../utilis/topNewses";

const TopNews = () => {
  return (
    <section className="bg-primary-light pt-9 lg:pt-19 pb-12 lg:pb-24">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="flex-1 lg:basis-1/2 space-y-4 lg:space-y-8">
          <SectionLabel label="Top news" />
          <div className="lg:pl-24 flex flex-col gap-4 lg:gap-8">
            <h1 className="pb-2 lg:pb-4">Our goal is to provide inclusive care for children with special needs</h1>
            <p className="text-secondary">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <div>
              <Link to="/" className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:basis-1/2 flex flex-col gap-3 lg:gap-6 p-6 pr-14 bg-white rounded-[1.25rem]">
          {topNewses.map((topNews) => (
            <div key={topNews.id} className="flex gap-5 items-center">
              <img
                className="w-48 rounded-[1.25rem] shrink-0"
                src={topNews.img}
                alt={`top news img ${topNews.id}`}
              />
              <div className="grow space-y-2">
                <h4>{topNews.title}</h4>
                <p className="font-bold text-secondary/50 text-sm leading-5.25">
                  {topNews.date}
                </p>
                <p className="text-secondary">{topNews.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNews;
