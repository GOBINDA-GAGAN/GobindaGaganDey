
import React, { useState } from "react";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState("Home");

  const isResumePage = location.pathname === "/resume/gobindagagandey";

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
  ];

  const closeMobile = () => setMobileOpen(false);

  const handleSectionNavigation = (sectionId) => {
    closeMobile();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const renderSectionLink = (link, mobile = false) => {
    const className = mobile
      ? "block rounded-lg px-4 py-3 text-sm text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
      : "group relative flex h-14 cursor-pointer items-center px-4 text-[13px] text-secondary";

    if (location.pathname !== "/") {
      return (
        <button
          key={link.name}
          type="button"
          onClick={() => {
            closeMobile();
            navigate("/", { state: { scrollTo: link.to } });
          }}
          className={className}
        >
          {link.name}
        </button>
      );
    }

    return (
      <ScrollLink
        key={link.name}
        to={link.to}
        smooth
        duration={500}
        offset={-70}
        onClick={closeMobile}
        onMouseEnter={() => setHovered(link.name)}
        className={className}
      >
        {mobile ? (
          link.name
        ) : (
          <>
            <span className="transition-opacity duration-200 group-hover:opacity-0">
              {link.name}
            </span>

            <span className="absolute left-4 top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap">
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
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
                className="block text-foreground"
              >
                {link.name}
              </motion.span>
            </span>

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
          </>
        )}
      </ScrollLink>
    );
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-md text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
    >
      <motion.span
        key={dark ? "sun" : "moon"}
        initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {dark ? (
          <Sun size={16} strokeWidth={1.8} />
        ) : (
          <Moon size={16} strokeWidth={1.8} />
        )}
      </motion.span>
    </button>
  );

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-dashed border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-4xl border-x border-dashed border-border">
        <div className="flex h-14 items-center justify-between px-5 sm:px-8 md:px-10 lg:px-12">

          {/* Logo */}
          <RouterLink
            to="/"
            onClick={closeMobile}
            className="font-serif text-[22px] leading-none tracking-tight text-foreground"
          >
            Gobinda
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => renderSectionLink(link))}

            {/* More Dropdown */}
            <div
              className="group relative"
              onMouseEnter={() => setHovered("More")}
            >
              <button
                type="button"
                className="relative flex h-14 items-center px-4 text-[13px] text-secondary"
              >
                <span className="transition-opacity duration-200 group-hover:opacity-0">
                  More
                </span>

                <span className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center whitespace-nowrap">
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
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
                    className="text-foreground"
                  >
                    More
                  </motion.span>

                  <ChevronDown
                    size={12}
                    strokeWidth={1.8}
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  />
                </span>

                {hovered === "More" && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-[6px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-foreground"
                  />
                )}
              </button>

              <div className="invisible absolute right-0 top-[calc(100%-1px)] w-32 translate-y-1 rounded-lg border border-border bg-background p-1 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href="/#books"
                  className="block rounded-md px-3 py-2 text-[13px] text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Books
                </a>

                <a
                  href="/#favorites"
                  className="block rounded-md px-3 py-2 text-[13px] text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Favourites
                </a>
              </div>
            </div>

            {themeButton}
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {themeButton}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
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
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[2px] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="absolute right-4 top-[58px] w-64 overflow-hidden rounded-xl border border-border bg-background shadow-2xl md:hidden"
            >
              <div className="p-2">
                {navLinks.map((link) => renderSectionLink(link, true))}

                <a
                  href="/#books"
                  onClick={closeMobile}
                  className="block rounded-lg px-4 py-3 text-sm text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Books
                </a>

                <a
                  href="/#favorites"
                  onClick={closeMobile}
                  className="block rounded-lg px-4 py-3 text-sm text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
                >
                  Favourites
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
