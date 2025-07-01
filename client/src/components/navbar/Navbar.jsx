import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Mystery Board ✨", to: "mystery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-black text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <h1 className="text-2xl font-bold text-orange-400">
            Gobinda<span className="text-orange-400">.dev</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70} 
                className="cursor-pointer hover:text-white transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire me button */}
        <a href="mailto:gobindagagandey@gmail.com">
            <button className="border hidden md:block border-orange-500 cursor-pointer text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
              <span className="cursor-pointer"> Hire me 😊</span>
            </button>
          </a>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-orange-400">Gobinda.dev</h1>
          <button onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-4 space-y-6 font-medium text-gray-300">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-white transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <a href="mailto:gobindagagandey@gmail.com">
            <button className="border border-orange-500 cursor-pointer text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-black transition">
              <span className="cursor-pointer"> Hire me 😊</span>
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
