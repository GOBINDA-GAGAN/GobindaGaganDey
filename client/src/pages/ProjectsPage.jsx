import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { projects } from "../../data/projects.js";
import ProjectCard from "../components/projects/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-primary">

      {/* Top */}
      <header className="border-b border-dashed border-border">
        <div className="mx-auto flex max-w-4xl items-center justify-between border-x border-dashed border-border px-5 py-5 sm:px-8 md:px-10">

          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-2
              text-[12px]
              text-secondary
              transition-colors
              hover:text-primary
            "
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />

            Back
          </Link>

          <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
            {projects.length} Projects
          </span>

        </div>
      </header>

      <main className="mx-auto max-w-4xl border-x border-dashed border-border">

        {/* Page Heading */}
        <section className="border-b border-dashed border-border px-5 py-12 sm:px-8 md:px-10 md:py-16">

          <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted">
            Selected work
          </p>

          <h1 className="font-serif text-[42px] leading-none tracking-[-0.04em] sm:text-[52px]">
            Projects
          </h1>

          <p className="mt-4 max-w-lg text-[14px] leading-6 text-secondary">
            A collection of products, experiments, developer tools, and
            interfaces built while exploring different areas of software
            engineering.
          </p>

        </section>

        {/* All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center border-t border-dashed border-border px-5 py-10"
        >
          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-2
              text-[12px]
              text-secondary
              transition-colors
              hover:text-primary
            "
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>
        </motion.div>

      </main>
    </div>
  );
};

export default ProjectsPage;