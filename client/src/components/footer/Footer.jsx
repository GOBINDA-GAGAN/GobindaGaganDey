import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const socialLinks = [
  {
    icon: <FaLinkedin size={25} className="text-blue-700" />,
    href: "https://www.linkedin.com/in/gobinda-gagan-dey/",
  }, // LinkedIn Blue
  {
    icon: <FaGithub size={25} className="text-gray-100" />,
    href: "https://github.com/GOBINDA-GAGAN",
  }, // GitHub Dark Gray
  {
    icon: <FaTwitter size={25} className="text-blue-400" />,
    href: "https://x.com/_GobindaGagan_",
  }, // Twitter Blue
  {
    icon: <FaYoutube size={25} className="text-red-600" />,
    href: "https://www.youtube.com/@GobindaGaganVlog",
  },
  {
    icon: <FaInstagram className="text-pink-500" />,
    href: "https://www.instagram.com/gobinda_gagan_/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-6 py-20 flex justify-center flex-col items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center place-items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-400">
            Gobinda Gagan Dey
          </h2>
          <p className="mt-2 text-gray-400">
            Crafting unique web experiences for brands and businesses.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            Quick Links
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-400"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-400"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-400"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-orange-400"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div>
          <h2 className="text-xl font-semibold text-orange-400 mb-3">
            Follow Me
          </h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="text-orange-400">Gobinda Gagan Dey</span>
      </div>
    </footer>
  );
};

export default Footer;
