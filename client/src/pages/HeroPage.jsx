import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: <FaFacebook />, href: "https://facebook.com" },
  { icon: <FaLinkedin />, href: "https://linkedin.com" },
  { icon: <FaGithub />, href: "https://github.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
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
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* LEFT SECTION */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.p
          className="text-orange-400 font-semibold mb-2 mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          WELCOME TO MY WORLD
        </motion.p>

        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hello, I'm <span className="text-gray-300">Gobinda Gagan</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Crafting Seamless Web Experiences
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I'm a passionate Full Stack Developer creating fast, intuitive, and responsive web applications.
          Let's build something impactful together.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>

          <div className="flex space-x-4 mt-2 sm:mt-0">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 text-2xl hover:text-white transition-colors"
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
        className="relative w-full max-w-[25rem] bg-white rounded-lg overflow-hidden shadow-xl mt-14 text-black rotate-0 md:rotate-[5.5deg]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <img
              src="/mee2.jpg"
              alt="profile"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm font-semibold">@gobinda gagan</span>
          </div>
          <button className="text-blue-500 text-xs font-bold border px-2 py-1 rounded">
            FOLLOW
          </button>
        </div>

        {/* Image */}
        <motion.img
          src="/mee2.jpg"
          alt="Instagram post"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
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
