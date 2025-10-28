import React from "react";
import SectionLabel from "../utilis/SectionLabel";
import Content from "./Content";
import Project from "./Project";
import { projectsdata } from "../utilis/projectsdata";

const ProjectSection = () => {
  const sectionTitle =
    "We are creating a place where children with special needs can thrive";
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container space-y-[4.125rem]">
        <div className="space-y-4 lg:space-y-8">
          <SectionLabel label="Projects we have done" />
          <div className="pl-[5.375rem] max-w-[40rem]">
            <Content SectionTitle={sectionTitle} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {projectsdata.map((projectdata) => (
            <Project
              key={projectdata.id}
              bg={projectdata.bg}
              title={projectdata.title}
              description={projectdata.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
