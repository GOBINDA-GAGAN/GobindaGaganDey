import React from "react";
import { FiArrowUpRight, FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "motion/react";

const DummyPreview = ({ project }) => {
  return (
    <div
      className={`
        relative
        h-full
        w-full
        overflow-hidden
        bg-gradient-to-br
        ${project.gradient}
      `}
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      {/* Fake Browser */}
      <div
        className="
          absolute
          left-[8%]
          right-[8%]
          top-[13%]
          bottom-[8%]
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-background/90
          shadow-2xl
          backdrop-blur
        "
      >
        {/* Browser Header */}
        <div className="flex h-7 items-center gap-1.5 border-b border-border px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />

          <div className="ml-3 h-2 w-20 rounded-full bg-surface-hover" />
        </div>

        {/* Fake UI */}
        <div className="flex h-full gap-3 p-4">

          {/* Sidebar */}
          <div className="hidden w-[22%] space-y-2 sm:block">
            <div className="h-3 w-12 rounded bg-primary/15" />
            <div className="h-2 w-full rounded bg-surface-hover" />
            <div className="h-2 w-4/5 rounded bg-surface-hover" />
            <div className="h-2 w-3/4 rounded bg-surface-hover" />
          </div>

          {/* Main */}
          <div className="flex-1 space-y-3">

            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-20 rounded bg-primary/20" />
                <div className="mt-2 h-2 w-28 rounded bg-surface-hover" />
              </div>

              <div className="h-6 w-12 rounded-md bg-primary/10" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 rounded-md border border-border bg-surface" />
              <div className="h-14 rounded-md border border-border bg-surface" />
              <div className="h-14 rounded-md border border-border bg-surface" />
            </div>

            {/* Chart */}
            <div className="relative h-16 overflow-hidden rounded-md border border-border bg-surface">
              <div className="absolute bottom-0 left-0 h-[45%] w-[12%] bg-primary/10" />
              <div className="absolute bottom-0 left-[15%] h-[70%] w-[12%] bg-primary/15" />
              <div className="absolute bottom-0 left-[30%] h-[50%] w-[12%] bg-primary/10" />
              <div className="absolute bottom-0 left-[45%] h-[80%] w-[12%] bg-primary/15" />
              <div className="absolute bottom-0 left-[60%] h-[60%] w-[12%] bg-primary/10" />
              <div className="absolute bottom-0 left-[75%] h-[90%] w-[12%] bg-primary/20" />
            </div>

          </div>
        </div>
      </div>

      {/* Project number */}
      <span className="absolute bottom-4 right-5 font-mono text-[10px] tracking-[0.2em] text-secondary">
        {String(project.id).padStart(2, "0")}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-40px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      className="group border-b border-dashed border-border p-4 sm:p-5"
    >
      {/* Preview */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-[1.55/1] overflow-hidden rounded-lg bg-surface">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.025]
              "
            />
          ) : (
            <DummyPreview project={project} />
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
              project.status === "Live"
                ? "bg-emerald-500"
                : "bg-amber-500"
            }`}
          />

          {project.status}
        </span>
      </div>

      {/* Short description */}
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
          {project.technologies.slice(0, 3).map((technology) => (
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