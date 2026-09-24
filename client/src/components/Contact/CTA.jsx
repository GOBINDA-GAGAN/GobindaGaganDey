import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ScrolledTooFar = () => {
  return (
    <section className="w-full border-b border-dashed border-border bg-background text-primary">
      <div className="mx-auto max-w-4xl border-x border-dashed border-border">

        {/* Heading */}
        <div className="border-b border-dashed border-border px-5 py-3 sm:px-7">
          <h2 className="font-serif text-[25px] leading-none tracking-[-0.04em] text-primary sm:text-[28px]">
            Scrolled Too Far
          </h2>
        </div>

        {/* CTA */}
        <div className="flex min-h-[240px] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[270px]">

          <p className="max-w-xl text-[16px] leading-7 tracking-[-0.02em] text-secondary sm:text-[18px]">
            If you've read this far, you might be interested in what I do.
          </p>

          <a
            href="#contact"
            className="
              group mt-5
              inline-flex items-center justify-center
              gap-2
              rounded-full
              bg-blend-color
              px-7 py-3
              text-[13px]
              font-semibold
              text-primary
              shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:px-8
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]
              active:scale-95
            "
          >
            Let's Talk

            <FiArrowRight
              className="
                h-4 w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ScrolledTooFar;