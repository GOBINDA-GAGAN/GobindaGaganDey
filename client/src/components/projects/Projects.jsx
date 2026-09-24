import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects.js";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section
      id="projects"
      className="w-full border-b border-dashed border-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-dashed border-border px-5 py-4 sm:px-8 md:px-10">

        <h2 className="font-serif text-[30px] leading-none tracking-[-0.03em] text-primary">
          Projects
        </h2>

        <Link
          to="/projects"
          className="
            group
            flex
            items-center
            gap-1
            text-[12px]
            text-secondary
            transition-colors
            duration-200
            hover:text-primary
          "
        >
          View all

          <FiArrowUpRight
            className="
              text-[13px]
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>

      {/* Four featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;