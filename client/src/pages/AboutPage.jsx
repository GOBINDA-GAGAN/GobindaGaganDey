import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MyInterests from "../components/AboutCard/MyInterests";
import ProfessionalExcellence from "../components/AboutCard/ProfessionalValues";
// import ExperienceSection from "../components/card/ExperienceSection";
import EducationJourney from "../components/card/Eduction";
import gsap from "gsap";
import { FaBookmark, FaComment, FaHeart, FaShare } from "react-icons/fa";

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

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(362);


  const toggleLike = () => {
    if (liked) setLikesCount((prev) => prev - 1);
    else setLikesCount((prev) => prev + 1);
    setLiked(!liked);
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
        <motion.div
          className=" w-full max-w-[25rem] bg-gray-200 rounded-lg overflow-hidden shadow-xl mt-14 text-black rotate-0 md:rotate-[0deg]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <img
                src="/mee1.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-semibold">@gobinda_gagan_</span>
            </div>
            <button className="text-blue-500 text-xs font-bold border px-2 py-1 rounded">
              FOLLOW
            </button>
          </div>

          {/* Image */}
          <motion.img
            src="/mee1.jpg"
            alt="Instagram post"
            className="w-full h-[80%] md:max-w-md lg:max-w-lg object-left-top"
            transition={{ duration: 0.3 }}
          />

          {/* Footer Actions */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-4 text-gray-900 text-xl">
                <FaHeart
                  onClick={toggleLike}
                  className={`cursor-pointer transition-colors duration-300 ${
                    liked ? "text-red-500" : "text-black"
                  }`}
                />
                <FaComment className="cursor-pointer hover:text-blue-500" />
                <FaShare className="cursor-pointer hover:text-blue-500" />
              </div>
              <FaBookmark className="cursor-pointer hover:text-blue-500" />
            </div>
            <p className="text-sm text-gray-800 font-semibold">
              {likesCount} likes
            </p>
            <p className="text-sm text-gray-700">
              Alok - <span className="text-blue-500">#FullStackDev</span>{" "}
              <span className="text-blue-500">#CreativeCoder</span>
            </p>
          </div>
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
        {/* <ProfessionalExcellence /> */}
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
