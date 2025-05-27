import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "Siliguri Govt Polytechnic",
    duration: "June 2021 - July 2024",
    gpa: "8.0",
    description:
      "Comprehensive coursework in programming, data structures, and software development.",
    highlights: [
      "Completed final year project on web development",
      "Participated in coding and tech events",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Techno Main Salt Lake",
    duration: "August 2024 - Present",
    gpa: "8.6 (Current)",
    description:
      "Focused on advanced computer science subjects, AI, machine learning, and systems design.",
    highlights: [
      "Built a machine learning model for traffic prediction",
      "Active member of the AI & Robotics club",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Techno Main Salt Lake",
    duration: "August 2024 - Present",
    gpa: "8.6 (Current)",
    description:
      "Focused on advanced computer science subjects, AI, machine learning, and systems design.",
    highlights: [
      "Built a machine learning model for traffic prediction",
      "Active member of the AI & Robotics club",
    ],
  },
];

export default function EducationJourney() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen text-white px-4 md:px-10 py-20 hidden md:block">
      <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-2 text-center">
        Educational Journey
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Hanging on experience, swinging toward innovation ✨
      </p>

      {/* Rope line */}
      <div className="relative w-full h-2 bg-orange-700 rounded-full mb-16">
        <div className="flex justify-center gap-x-10 items-start relative z-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative flex flex-col items-center animate-sway"
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {/* Pin */}
              <div className="w-4 h-4 bg-red-500 rounded-full z-20 absolute -top-4"></div>

              {/* Hanging string */}
              <div className="w-0.5 h-16 bg-orange-500 z-10"></div>

              {/* Card */}
              <div className="bg-gray-900 border border-orange-700 rounded-2xl p-6 w-64 md:w-80 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-gray-300 mb-1">
                  {edu.institution}
                </h4>
                <p className="text-sm text-orange-400 mb-1">
                  {edu.duration} &nbsp; GPA: {edu.gpa}
                </p>
                <p className="text-gray-400 mb-4">{edu.description}</p>
                <div className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="inline-block bg-orange-900 text-orange-300 px-4 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sway animation */}
      <style jsx>{`
        @keyframes sway {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-sway {
          animation: sway 2s ease-in-out infinite alternate;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}
