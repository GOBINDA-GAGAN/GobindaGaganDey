import React, { useState, useEffect } from "react";
import project1Photo from "../assets/image/project-1_image.png";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiChartdotjs } from "react-icons/si";
import { MdApi } from "react-icons/md";

const projectsData = [
  {
    title: "CryptoTracker",
    description:
      "A responsive React app that fetches real-time cryptocurrency data using public APIs. Includes price charts with Chart.js, dark mode, search functionality, and responsive design — all built using React, Tailwind CSS, and Chart.js.",
    tech: [
      { name: "React", icon: <FaReact size={20} className="text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={20} className="text-cyan-400" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={20} className="text-yellow-400" />,
      },
      {
        name: "Chart.js",
        icon: <SiChartdotjs size={20} className="text-pink-500" />,
      },
      {
        name: "REST API",
        icon: <MdApi size={20} className="text-green-400" />,
      },
    ],
    image: project1Photo,
    github: "https://github.com/GOBINDA-GAGAN/CryptoDashboard",
    demo: "https://crypto-dashboard-gold-delta.vercel.app/",
  },
];

export default function MyProjects() {
  const [filter, setFilter] = useState("top3");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filteredProjects = filter === "top3" ? projects.slice(0, 3) : projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800  to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
        My Projects
      </h1>
      <p className="text-center text-gray-400 mb-6">
        A showcase of my full-stack projects, built using modern web
        technologies and frameworks.
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("top3")}
          className={`px-3 py-2 border rounded-full ${
            filter === "top3"
              ? "bg-orange-500 text-black shadow-lg"
              : "bg-[#806b6b] border-gray-700 text-white hover:bg-gray-800"
          }`}
        >
          Top 3
        </button>
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 border rounded-full hover:bg-[#141D2D] ${
            filter === "all"
              ? "bg-orange-500 text-black shadow-lg"
              : "bg-[#806b6b] border-gray-700 text-white hover:bg-gray-800"
          }`}
        >
          All
        </button>
      </div>

      {/* Project Grid */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-end">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] rounded-2xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-orange-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-900 text-white px-2 py-1 rounded text-xs"
                >
                  <span>{techItem.icon}</span>
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
