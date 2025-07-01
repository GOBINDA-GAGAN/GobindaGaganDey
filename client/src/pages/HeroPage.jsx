import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: <FaGithub size={25} className="text-gray-900" />,
    href: "https://github.com/GOBINDA-GAGAN",
    shadowColor: "shadow-gray-400",
  },
  {
    icon: <SiLeetcode size={25} className="text-yellow-500" />,
    href: "https://leetcode.com/u/_GobindaGagan_/",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    icon: <FaLinkedin size={25} className="text-blue-700" />,
    href: "https://www.linkedin.com/in/gobinda-gagan-dey/",
    shadowColor: "shadow-blue-700/50",
  },
  {
    icon: <FaTwitter size={25} className="text-blue-400" />,
    href: "https://x.com/_GobindaGagan_",
    shadowColor: "shadow-blue-400/50",
  },
  {
    icon: <FaYoutube size={25} className="text-red-600" />,
    href: "https://www.youtube.com/@GobindaGagan",
    shadowColor: "shadow-red-600/50",
  },
  {
    icon: <FaInstagram size={25} className="text-pink-500" />,
    href: "https://www.instagram.com/gobinda_gagan_/",
    shadowColor: "shadow-pink-500/50",
  },
];

export default function HomePage() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(362);
  const homeRef = useRef(null);

  const toggleLike = () => {
    if (liked) setLikesCount((prev) => prev - 1);
    else setLikesCount((prev) => prev + 1);
    setLiked(!liked);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      homeRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 1.5,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={homeRef}
      className="md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* LEFT SECTION */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.p
          className="text-orange-400 font-semibold mb-4 mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          WELCOME TO MY WORLD
        </motion.p>

        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-medium">
         Hello, I'm{" "}
            <span className="text-orange-400 text-3xl md:text-6xl ">
             Gobinda Gagan
            </span>
          </p>
        </motion.h1>

        <motion
          className="text-2xl md:text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className=" text-2xl md:text-4xl text-white mb-10">
            Real engineering is thinking about the{" "}
            <span className="text-yellow-400 font-semibold">‘‘why’’</span> before
            the <span className="text-cyan-400 font-semibold">‘‘how’’</span>.
          </p>
        </motion>

        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I don’t just write code — I build real, fast, and impactful products
          that people use. Let’s create something powerful together.
        </motion.p>

        <div className="flex flex-col  sm:flex-row items-center gap-4">
          <a href="mailto:gobindagagandey@gmail.com">
            <motion.button
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me !
            </motion.button>
          </a>

          <div className="flex justify-evenly  gap-3  mt-2  sm:mt-0">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-orange-400 text-2xl hover:text-black transition-colors p-1.5 md:p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-lg ${item.shadowColor}`}
                whileHover={{ scale: 1.3, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT CARD SECTION */}
      <motion.div
        className=" w-full max-w-[25rem] bg-gray-200 rounded-lg overflow-hidden shadow-xl mt-14 text-black rotate-0 md:rotate-[5.5deg]"
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
          className="w-full h-[80%] object-left-top"
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
    </div>
  );
}
