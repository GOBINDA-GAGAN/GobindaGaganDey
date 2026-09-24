import React, { useState } from "react";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { useTheme } from "../../../context/ThemeContext";

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState("Home");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-dashed border-border bg-background backdrop-blur-sm">
      <div className="mx-auto w-full max-w-4xl border-x border-dashed border-border">
        <div className="flex h-14 items-center justify-between px-5 sm:px-8 md:px-10 lg:px-12">

          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer font-serif text-[22px] leading-none tracking-tight text-foreground"
          >
            Gobinda
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">

            {/* Normal Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                onMouseEnter={() => setHovered(link.name)}
                className="group relative flex h-14 cursor-pointer items-center px-4 text-[13px] font-normal leading-none text-secondary"
              >
                {/* Normal Text */}
                <span className="text-[13px] font-normal leading-none transition-opacity duration-200 group-hover:opacity-0">
                  {link.name}
                </span>

                {/* Hover Text */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap">
                  <motion.span
                    initial={{
                      clipPath: "inset(0 100% 0 0)",
                    }}
                    animate={{
                      clipPath:
                        hovered === link.name
                          ? "inset(0 0% 0 0)"
                          : "inset(0 100% 0 0)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block text-[13px] font-normal leading-none text-foreground"
                  >
                    {link.name}
                  </motion.span>
                </span>

                {/* Moving Dot */}
                {hovered === link.name && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-[6px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5,
                    }}
                  />
                )}
              </Link>
            ))}

            {/* More */}
            <div
              className="group relative"
              onMouseEnter={() => setHovered("More")}
            >
              <button
                type="button"
                className="relative flex h-14 cursor-pointer items-center px-4 text-[13px] font-normal leading-none text-secondary"
              >
                {/* Normal More Text */}
                <span className="text-[13px] font-normal leading-none transition-opacity duration-200 group-hover:opacity-0">
                  More
                </span>

                {/* Hover More Text */}
                <span className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center overflow-hidden whitespace-nowrap">
                  <motion.span
                    initial={{
                      clipPath: "inset(0 100% 0 0)",
                    }}
                    animate={{
                      clipPath:
                        hovered === "More"
                          ? "inset(0 0% 0 0)"
                          : "inset(0 100% 0 0)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block text-[13px] font-normal leading-none text-foreground"
                  >
                    More
                  </motion.span>

                  {/* Arrow kept separate from text */}
                  <ChevronDown
                    size={12}
                    strokeWidth={1.8}
                    className="ml-1 shrink-0 text-foreground transition-transform duration-300 group-hover:rotate-180"
                  />
                </span>

                {/* Moving Dot */}
                {hovered === "More" && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-[6px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5,
                    }}
                  />
                )}
              </button>

              {/* Dropdown */}
              <div className="invisible absolute right-0 top-[calc(100%-1px)] w-32 translate-y-1 rounded-lg border border-border bg-background p-1 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                <a
                  href="#books"
                  className="block rounded-md px-3 py-2 text-[13px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Books
                </a>

                <a
                  href="#favorites"
                  className="block rounded-md px-3 py-2 text-[13px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Favourites
                </a>

              </div>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-secondary transition-colors duration-200 hover:bg-surface-hover hover:text-foreground"
            >
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {dark ? (
                  <Sun size={16} strokeWidth={1.8} />
                ) : (
                  <Moon size={16} strokeWidth={1.8} />
                )}
              </motion.span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center rounded-md text-secondary transition hover:bg-surface-hover hover:text-foreground"
            >
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {dark ? (
                  <Sun size={16} strokeWidth={1.8} />
                ) : (
                  <Moon size={16} strokeWidth={1.8} />
                )}
              </motion.span>
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="flex h-8 w-8 items-center justify-center rounded-md text-secondary transition hover:bg-surface-hover hover:text-foreground"
            >
              {mobileOpen ? (
                <X size={19} strokeWidth={1.8} />
              ) : (
                <Menu size={19} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[2px] md:hidden"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="absolute right-4 top-[58px] w-64 overflow-hidden rounded-xl border border-border bg-background shadow-2xl md:hidden"
          >
            <div className="p-2">

              {/* Home */}
              <Link
                to="hero"
                smooth
                duration={500}
                offset={-70}
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-[14px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                Home
              </Link>

              {/* Projects */}
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-70}
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-[14px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                Projects
              </Link>

              {/* Experience */}
              <Link
                to="experience"
                smooth
                duration={500}
                offset={-70}
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-[14px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                Experience
              </Link>

              {/* Books */}
              <a
                href="#books"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-[14px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                Books
              </a>

              {/* Favourites */}
              <a
                href="#favorites"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-[14px] font-normal leading-none text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                Favourites
              </a>

            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;