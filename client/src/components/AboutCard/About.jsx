import React from "react";
import { motion } from "motion/react";

const about = {
  title: "About",
  points: [
     {
    text: "I'm a Software Developer with 6 months of internship experience building full-stack and AI-powered applications.",
    highlight: "Software Developer",
  },
  {
    text: "I build frontend and backend applications using React.js, Node.js, TypeScript, and MongoDB to solve real-world problems.",
    highlight: "React.js, Node.js, TypeScript, and MongoDB",
  },
  {
    text: "I develop REST APIs and AI-powered features with a focus on clean code, performance, and scalable software solutions.",
    highlight: "REST APIs and AI-powered features",
  },
  {
    text: "I enjoy solving challenging problems and strengthening my fundamentals in data structures, algorithms, and software engineering.",
    highlight: "data structures, algorithms, and software engineering",
  },
  {
    text: "I'm committed to continuous learning, building meaningful projects, and growing as a software engineer.",
    highlight: "continuous learning",
  },
  ],
};

const About = () => {
  const renderText = (text, highlight) => {
    const [before, after] = text.split(highlight);

    return (
      <>
        {before}

        <span className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 group-hover:decoration-foreground">
          {highlight}
        </span>

        {after}
      </>
    );
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="px-4 py-5 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="font-serif text-2xl leading-none tracking-[-0.04em] text-foreground"
        >
          {about.title}
        </motion.h2>
      </div>

      {/* Header divider */}
      <div className="border-t border-dashed border-border" />

      {/* About list */}
      <motion.ul
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="px-4 py-4 sm:px-6 sm:py-5 md:px-8"
      >
        {about.points.map((point, index) => (
          <motion.li
            key={index}
            whileHover={{ x: 4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="group flex cursor-default items-start gap-3 rounded-lg px-2 py-2 text-[13px] leading-5 text-secondary transition-colors duration-200 hover:bg-surface-hover hover:text-foreground sm:px-3 sm:py-2.5"
          >
            {/* Bullet */}
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted transition-all duration-200 group-hover:scale-125 group-hover:bg-foreground" />

            {/* Text */}
            <span className="min-w-0">
              {renderText(point.text, point.highlight)}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default About;