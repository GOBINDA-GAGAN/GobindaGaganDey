// components/ProfessionalExcellence.jsx
import React from "react";
import { professionalValues } from "../../assets/professionalValues.js";

const ProfessionalExcellence = () => {
  return (
    <div className=" text-white py-16 px-4 sm:px-6 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-400 mb-12">
        Professional Excellence
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionalValues.map((value, index) => (
          <div
            key={index}
            className="bg-[#2d333a] p-6  rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-orange-500/30"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-300 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExcellence;
