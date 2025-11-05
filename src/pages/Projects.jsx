import React from "react";
import { projectsdata } from "../utilis/projectsdata";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
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

export default Projects;
