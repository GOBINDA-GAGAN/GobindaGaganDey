import React from "react";
import { motion } from "framer-motion";
import MyInterests from "../components/AboutCard/MyInterests";
import ProfessionalExcellence from "../components/AboutCard/ProfessionalValues";
// import ExperienceSection from "../components/card/ExperienceSection";
import EducationJourney from "../components/card/Eduction";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br flex flex-col justify-center items-center from-gray-800 via-gray-900 to-gray-800 text-white px-1  md:px-16 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold text-orange-400 mb-12 text-center"
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      {/* Main Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <img
            src="/mee2.jpg"
            alt="Gobinda Gagan"
            className="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg md:h-[600px] object-cover shadow-xl"
          />
        </motion.div>

        {/* Description & Interests */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-3xl font-bold mb-6 text-center md:text-left"
            variants={itemVariants}
          >
            <span className="text-orange-400">Full Stack Web Developer</span>
          </motion.h3>

          <motion.p
            className="text-gray-300 leading-relaxed mb-8 text-center md:text-left text-base sm:text-lg"
            variants={itemVariants}
          >
            Hello! I’m{" "}
            <span className="text-orange-400 font-semibold">Gobinda Gagan</span>
            , a passionate Software Engineer dedicated to designing and
            developing efficient, scalable, and user-friendly web applications.
            I thrive on solving complex problems and turning innovative ideas
            into seamless digital experiences.
          </motion.p>

          {/* Interests Section */}
          <motion.div variants={itemVariants}>
            <MyInterests />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-10/12 flex justify-center items-center">
        <ProfessionalExcellence />
      </div>
      <div className="w-10/12 flex justify-center items-center">
        {/* <ExperienceSection /> */}
      </div>
      <div className="w-10/12 flex justify-center items-center">
        <EducationJourney />
      </div>
    </motion.div>
  );
};

export default AboutMe;
