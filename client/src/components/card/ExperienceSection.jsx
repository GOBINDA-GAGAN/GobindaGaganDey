import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const experiences = [
  {
    title: "Software Development Intern",
    company: "SkyShine Technologies",
    location: "Remote",
    date: "Feb 2025 – Present",
    description:
      "End-to-end development of a web-based platform using the MERN stack to display subscription pricing for multiple cloud, VPS, and dedicated server plans, including maintenance support tiers.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    points: [
      "Integrated dynamic pricing modules for server plans",
      "Collaborated with UI/UX designer to improve user flow and visual hierarchy",
      "Designed and implemented secure customer login panel",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    date: "Feb 2024 – May 2024",
    description:
      "Developed dynamic websites for small businesses using Next.js and TailwindCSS. Delivered responsive design and SEO-friendly components.",
    tech: ["Next.js", "TailwindCSS", "Vercel", "GitHub"],
    points: [
      "Built agency websites with CMS integration",
      "Optimized Lighthouse performance scores above 90+",
    ],
  },
];

const getIcon = (tech) => {
  switch (tech) {
    case "MongoDB":
      return <SiMongodb />;
    case "Express.js":
      return <SiExpress />;
    case "React":
      return <SiReact />;
    case "Node.js":
      return <SiNodedotjs />;
    default:
      return null;
  }
};

export default function ExperienceSection() {
  return (
    <section className=" py-16 text-white px-4 sm:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-orange-500 mb-3 text-center">
        Professional Journey
      </h2>
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Building real-world experience through innovative projects
      </p>

      <div className="relative border-l-2 border-orange-600 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8"
          >
            {/* Dot on timeline */}
            <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#0e0e0e] border-2 border-orange-500"></span>

            <div className="bg-[#0d0d0d] p-6 rounded-xl border border-orange-900 shadow-lg">
              <h3 className="text-xl font-semibold">
                {exp.title}{" "}
                <span className="text-gray-400 font-normal">at</span>{" "}
                <span className="text-gray-200">{exp.company}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-orange-400 mt-1">
                <span>{exp.location}</span>
                <span>•</span>
                <span className="bg-orange-900/30 px-3 py-1 rounded-full text-orange-400">
                  {exp.date}
                </span>
              </div>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-orange-900/20 text-orange-400 rounded-full"
                  >
                    {getIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="list-disc list-inside mt-4 text-gray-300 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
