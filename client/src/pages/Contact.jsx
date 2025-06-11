import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white md:py-20 py-10 px-6 text-center">
      <h3 className="text-xl text-orange-400 mb-2">
        Hi, I'm Gobinda Gagan Dey
      </h3>
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
        Let's Work Together!
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Interested in collaborating, hiring, or just having a chat? Reach out to
        me on your favorite platform!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Email */}
        <a href="mailto:gobindagagandey@gmail.com">
          <div
            className="bg-[#111827] p-6 rounded-xl shadow-md w-72 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
            style={{
              boxShadow:
                "inset 0 0 10px rgba(255,165,0,0.3), 0 0 30px rgba(255,165,0,0.3)",
            }}
          >
            <FiMail className="text-orange-400 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-1">Email</h2>
            <p className="text-gray-300 break-words">
              gobindagagandey@gmail.com
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/gobinda-gagan-dey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bg-[#111827] p-6 rounded-xl shadow-md w-72 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
            style={{
              boxShadow:
                "inset 0 0 10px rgba(255,165,0,0.3), 0 0 30px rgba(255,165,0,0.3)",
            }}
          >
            <FaLinkedin className="text-orange-400 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-1">LinkedIn</h2>
            <p className="text-gray-300">@gobinda-gagan-dey</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/GOBINDA-GAGAN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bg-[#111827] p-6 rounded-xl shadow-md w-72 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
            style={{
              boxShadow:
                "inset 0 0 10px rgba(255,165,0,0.3), 0 0 30px rgba(255,165,0,0.3)",
            }}
          >
            <FaGithub className="text-orange-400 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-1">GitHub</h2>
            <p className="text-gray-300">@GOBINDA-GAGAN</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
