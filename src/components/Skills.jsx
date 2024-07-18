import React from "react";
import { skillsData } from "../utils/skillsData";

function Skills() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center text-primary-600 dark:text-white">
      <h3 className="text-center text-5xl font-normal leading-relaxed dark:text-gray-300">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-4 p-4 md:gap-10 md:p-10 lg:w-[80%]">
        {skillsData.map((skill) => (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 p-2 text-gray-700 dark:border-gray-600 dark:text-gray-400">
            <span>{<skill.icon size={24} />}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
