import React, { useState, useEffect } from "react";

const projectsData = [
  {
    title: "Contest Tracker",
    description:
      "MERN-based app to track, filter, and bookmark coding contests with solution links and dark mode support.",
    tech: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Express", image: "/icons/express.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
    ],
    image: "/images/contest-tracker.png",
    github: "https://github.com/user/contest-tracker",
    demo: "https://contest-tracker-demo.com",
  },
  {
    title: "Customer Engagement Dashboard",
    description:
      "Real-time analytics dashboard with engagement tracking, retention insights, and dynamic filtering.",
    tech: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Express", image: "/icons/express.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
    ],
    image: "/images/engagement-dashboard.png",
    github: "https://github.com/user/engagement-dashboard",
    demo: "https://engagement-dashboard-demo.com",
  },
  {
    title: "Video Streaming App",
    description:
      "A feature-rich video streaming platform with real-time search, user authentication, and video recommendations.",
    tech: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Express", image: "/icons/express.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
    ],
    image: "/images/video-streaming.png",
    github: "https://github.com/user/video-streaming-app",
    demo: "https://video-streaming-demo.com",
  },
  {
    title: "Contest Tracker",
    description:
      "MERN-based app to track, filter, and bookmark coding contests with solution links and dark mode support.",
    tech: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Express", image: "/icons/express.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
    ],
    image: "/images/contest-tracker.png",
    github: "https://github.com/user/contest-tracker",
    demo: "https://contest-tracker-demo.com",
  },
  {
    title: "Customer Engagement Dashboard",
    description:
      "Real-time analytics dashboard with engagement tracking, retention insights, and dynamic filtering.",
    tech: [
      { name: "MongoDB", image: "/icons/mongodb.svg" },
      { name: "Express", image: "/icons/express.svg" },
      { name: "React", image: "/icons/react.svg" },
      { name: "Node.js", image: "/icons/nodejs.svg" },
    ],
    image: "/images/engagement-dashboard.png",
    github: "https://github.com/user/engagement-dashboard",
    demo: "https://engagement-dashboard-demo.com",
  },
  
];

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In real scenarios, you can fetch from API
    setProjects(projectsData);
  }, []);

  return (
    <div className="min-h-screen    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
        My Projects
      </h1>
      <p className="text-center text-gray-400 mb-10">
        A showcase of my full-stack projects, built using modern web
        technologies and frameworks.
      </p>
      <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] rounded-2xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-orange-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-orange-800 px-2 py-1 rounded text-xs"
                >
                  <img
                    src={techItem.image}
                    alt={techItem.name}
                    className="w-4 h-4"
                  />
                  <span>{techItem.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-700 px-4 py-2 rounded hover:bg-orange-600 text-sm transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 text-sm transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
