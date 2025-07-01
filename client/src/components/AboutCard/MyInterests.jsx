import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const interestsData = [
  { title: "Photography", image: "/photography.jpg" },
  { title: "Coding", image: "/coding.jpeg" },
  { title: "Video Editing", image: "/videoEditing.jpg" },
  { title: "Flute", image: "/flute.jpg" },
  { title: "Content Creating", image: "/youtube.jpeg" },
  { title: "Chess", image: "/ChessSet.jpg" },
];

const MyInterests = () => {
  const scrollRef = useRef(null);
  const requestId = useRef(null);
  const scrollLeftRef = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 0.5; // adjust scroll speed here
    const totalScrollWidth = scrollContainer.scrollWidth / 2;

    const step = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= totalScrollWidth) {
        scrollContainer.scrollLeft = 0;
        scrollLeftRef.current = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
        scrollLeftRef.current = scrollContainer.scrollLeft;
      }

      // Update React state every 10 frames to trigger re-render for 3D effects
      if (Math.floor(scrollLeftRef.current * 10) % 10 === 0) {
        setScrollLeft(scrollLeftRef.current);
      }

      requestId.current = requestAnimationFrame(step);
    };

    requestId.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId.current);
  }, []);

  const duplicatedData = [...interestsData, ...interestsData];
  const cardWidth = 180 + 24; // fixed card width + gap

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <div className="md:px-0 md:py-8 px-2 py-4  text-white rounded-lg max-w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold tracking-wide">I Like It</h2>
        {/* <ArrowRight className="w-5 h-5" /> */}
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide no-scrollbar whitespace-nowrap"
        style={{ scrollBehavior: "auto", maxWidth: "100%" }}
      >
        {duplicatedData.map((interest, index) => {
          const cardCenter = index * cardWidth + cardWidth / 2;
          const containerCenter =
            scrollLeft + (scrollRef.current?.offsetWidth || 0) / 2;

          const distance = cardCenter - containerCenter;

          const maxRotation = 35;
          const maxTranslateZ = 40;

          const normalizedDistance = Math.max(
            -1,
            Math.min(1, distance / cardWidth)
          );

          const rotationY = -normalizedDistance * maxRotation;
          const translateZ = (1 - Math.abs(normalizedDistance)) * maxTranslateZ;
          const scale = 0.85 + (1 - Math.abs(normalizedDistance)) * 0.15;

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className={` min-w-[160px] md:min-w-[180px] rounded-xl  flex flex-col justify-between  select-none`}
              style={{
                transformStyle: "preserve-3d",
                transform: `perspective(800px) rotateY(${rotationY}deg) translateZ(${translateZ}px) scale(${scale})`,
                transition: "transform 0.2s ease-out",
                boxShadow: `0 10px 15px rgba(0,0,0,${
                  0.1 + (1 - Math.abs(normalizedDistance)) * 0.15
                })`,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h3 className="font-bold text-lg">{interest.title}</h3>
              <img
                src={interest.image}
                alt={interest.title}
                className="mt-3 rounded-lg object-cover w-full h-15 md:h-15"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>

      <style>{`
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MyInterests;
