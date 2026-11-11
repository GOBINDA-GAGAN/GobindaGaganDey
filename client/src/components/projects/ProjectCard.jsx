import React from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "motion/react";

const ProjectCard = ({ project, index = 0 }) => {
  console.log(project.gradient);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group border-b border-dashed border-border p-10 sm:p-5 bg-gradient-to-tr ${project.gradient}`}
      style={{ background: project.gradient }}
    >
      {/* Real Project Screenshot */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-[1.55/1] overflow-hidden rounded-lg ">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.025]
              "
            />
          )}
        </div>
      </a>

      {/* Title */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <h2 className="text-[19px] font-semibold tracking-[-0.03em] text-primary">
          {project.title}
        </h2>

        <span className="flex shrink-0 items-center gap-1.5 text-[12px] text-secondary">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "Live" ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />
          {project.status}
        </span>
      </div>

      {/* Short Description */}
      <p className="mt-1 text-[13px] text-secondary">
        {project.shortDescription}
      </p>

      {/* Description */}
      <p className="mt-3 text-[13px] leading-[1.55] text-secondary">
        {project.description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between gap-3">
        {/* Technologies */}
        <div className="flex min-w-0 flex-wrap gap-1.5">
          {project.technologies.slice(0, 8).map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-border
                bg-surface
                px-2
                py-1
                text-[10px]
                font-medium
                text-secondary
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex shrink-0 items-center gap-3 text-muted">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live project"
            className="transition-colors hover:text-primary"
          >
            <FiGlobe size={16} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="transition-colors hover:text-primary"
          >
            <FiGithub size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
