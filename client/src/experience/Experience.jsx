import React from "react";
import {
  FiArrowUpRight,
  FiCalendar,
  FiMapPin,
  FiCheck,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      company: "Vanurtech Media Pvt. Ltd.",
      role: "Full Stack Developer Intern",
      duration: "3 Months",
      period: "May 2025 — July 2025",
      location: "Bhubaneswar, Odisha",
      type: "Internship",
      team: "Team Lead",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST API",
      ],
      points: [
        <>
          Reduced API response time by <strong>35%</strong> by optimizing
          MongoDB queries, indexing frequently accessed fields, and improving
          backend service logic.
        </>,
        <>
          Improved frontend performance by <strong>28%</strong> through
          component optimization, lazy loading, and reducing unnecessary API
          requests.
        </>,
        <>
          Resolved <strong>40+ integration issues</strong> across REST APIs,
          authentication, validation, and frontend/backend data handling.
        </>,
        <>
          Worked as <strong>Team Lead</strong> for a{" "}
          <strong>4-member</strong> team, assigning tasks, reviewing code, and
          coordinating feature delivery.
        </>,
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full border-b border-dashed border-border bg-background"
    >
      <div className="mx-auto max-w-4xl border-x border-dashed border-border">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-dashed border-border px-5 py-3.5 sm:px-7">
          <h2 className="font-serif text-[25px] leading-none tracking-[-0.04em] text-primary sm:text-[28px]">
            Experience
          </h2>

          <span className="text-[8px] uppercase tracking-[0.18em] text-muted">
            3 Months
          </span>
        </div>

        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="group"
          >
            {/* Company */}
            <div className="border-b border-dashed border-border px-5 py-4 sm:px-7">

              <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">

                    <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-primary sm:text-[19px]">
                      {experience.company}
                    </h3>

                    <span className="text-[8px] uppercase tracking-[0.12em] text-muted">
                      {experience.type}
                    </span>

                  </div>

                  <p className="mt-1 text-[11px] text-secondary">
                    {experience.role}
                  </p>
                </div>

                <FiArrowUpRight
                  className="
                    mt-0.5 shrink-0
                    text-muted
                    transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-primary
                  "
                />
              </div>

              {/* Meta */}
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] text-muted">

                <span className="flex items-center gap-1.5">
                  <FiCalendar />
                  {experience.period}
                </span>

                <span className="flex items-center gap-1.5">
                  <FiMapPin />
                  {experience.location}
                </span>

                <span>
                  {experience.duration}
                </span>

              </div>
            </div>

            {/* Stack */}
            <div className="border-b border-dashed border-border px-5 py-3 sm:px-7">
              <div className="flex flex-wrap gap-1.5">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-[4px]
                      border border-border
                      bg-surface
                      px-2 py-1
                      text-[8px]
                      tracking-[0.08em]
                      text-secondary
                      transition-colors
                      hover:border-border-hover
                      hover:text-primary
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="px-5 py-4 sm:px-7">

              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.16em] text-muted">
                  Engineering Impact
                </span>

                <span className="text-[8px] uppercase tracking-[0.14em] text-muted">
                  04 Results
                </span>
              </div>

              <ul className="space-y-2.5">
                {experience.points.map((point, index) => (
                  <li
                    key={index}
                    className="
                      flex gap-2.5
                      text-[11px]
                      leading-[1.55]
                      text-secondary
                      sm:text-[12px]
                    "
                  >
                    <FiCheck
                      className="
                        mt-[3px]
                        h-3 w-3
                        shrink-0
                        text-primary
                      "
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-dashed border-border px-5 py-2 sm:px-7">

              <span className="text-[8px] uppercase tracking-[0.15em] text-muted">
                {experience.team}
              </span>

              <span className="flex items-center gap-1.5 text-[8px] uppercase tracking-[0.15em] text-muted">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                Completed
              </span>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;