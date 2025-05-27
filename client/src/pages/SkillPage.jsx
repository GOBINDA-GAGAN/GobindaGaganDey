import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFirebase,
  SiRedux,
  SiVercel,
  SiPostman,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, type: "Frontend" },
  { name: "React", icon: <SiReact />, type: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, type: "Frontend" },
  { name: "Redux", icon: <SiRedux />, type: "Frontend" },

  { name: "Node.js", icon: <SiNodedotjs />, type: "Backend" },
  { name: "Express.js", icon: <SiExpress />, type: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, type: "Backend" },

  { name: "TailwindCSS", icon: <SiTailwindcss />, type: "Tools" },
  { name: "Git", icon: <SiGit />, type: "Tools" },
  { name: "GitHub", icon: <SiGithub />, type: "Tools" },
  { name: "Docker", icon: <SiDocker />, type: "Tools" },
  { name: "Firebase", icon: <SiFirebase />, type: "Tools" },
  { name: "Vercel", icon: <SiVercel />, type: "Tools" },
  { name: "Postman", icon: <SiPostman />, type: "Tools" },
  { name: "Figma", icon: <SiFigma />, type: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeCategory);

  return (
    <div className="text-white text-center px-4 sm:px-8 lg:px-20 py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 min-h-screen">
      <h2 className="text-4xl font-bold text-orange-500 mb-2">My Skills</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        I put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold border ${
              activeCategory === category
                ? "bg-orange-500 text-black shadow-lg"
                : "bg-[#806b6b] border-gray-700 text-white hover:bg-gray-800"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[#1a1a1a] p-6 rounded-2xl w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-4xl shadow-md hover:scale-110 transition-transform"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              {skill.icon}
              <p className="text-sm mt-2 text-white text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
