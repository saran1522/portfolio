import React from "react";
import { skillsData } from "../utils/skillsData";
import Heading from "./Heading";

function Skills() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center">
      <Heading title="Skills" />
      <div className="flex flex-wrap justify-center gap-4 p-4 md:w-[80%] md:gap-6 md:p-10">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-300 p-2 dark:border-gray-700"
          >
            <span>{<skill.icon size={24} />}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
