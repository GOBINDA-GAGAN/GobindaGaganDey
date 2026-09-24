import React from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-dashed border-border bg-background text-primary">
      <div className="mx-auto max-w-4xl border-x border-dashed border-border">

        {/* Quote */}
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-dashed border-border px-6 py-20">

          {/* Decorative Quote */}
          <div
            className="
              absolute
              left-1/2
              top-8
              -translate-x-1/2
              font-serif
              text-[48px]
              leading-none
              text-secondary/20
            "
          >
            “
          </div>

          <div className="relative max-w-2xl text-center">

            {/* Main Quote */}
            <blockquote
              className="
                font-serif
                text-[25px]
                italic
                leading-[1.35]
                tracking-[-0.02em]
                text-primary
                sm:text-[30px]
                md:text-[34px]
              "
            >
              “Keep going. The version of you you're building is worth the
              effort.”
              <span className="ml-2">❤️</span>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-secondary
                "
              >
                Gobinda Gagan Dey
              </span>

              <span className="h-px w-8 bg-border" />
            </div>

          </div>
        </div>

        {/* Footer Information */}
        <div
          className="
            grid
            min-h-[115px]
            grid-cols-1
            items-center
            px-6
            py-8
            sm:grid-cols-3
            sm:px-10
          "
        >

          {/* Left */}
          <div className="hidden sm:block">
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-muted
              "
            >
              Portfolio
            </span>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-[13px] text-secondary">
              Designed & Developed by{" "}
              <span className="font-medium text-primary">
                Gobinda
              </span>
            </p>

            <p className="mt-2 text-[12px] text-muted">
              © {year} All rights reserved.
            </p>
          </div>

          {/* Back To Top */}
          <div className="mt-6 flex justify-center sm:mt-0 sm:justify-end">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              offset={-70}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-2
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-secondary
                transition-colors
                duration-300
                hover:text-primary
              "
            >
              Back to top

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-border-hover
                "
              >
                <FiArrowUpRight className="text-[13px]" />
              </span>
            </Link>
          </div>

        </div>

        {/* Bottom Signature */}
        <div
          className="
            flex
            items-center
            justify-center
            border-t
            border-dashed
            border-border
            py-3
          "
        >
          <p
            className="
              flex
              items-center
              gap-1.5
              text-[10px]
              tracking-[0.12em]
              text-muted
            "
          >
            Built with

            <FiHeart className="text-[10px] text-rose-400" />

            and curiosity
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;