import React from "react";
import { projectsData } from "../utils/projectsData";
import { FaGithub } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="mt-14 flex flex-col items-center text-primary-600 dark:text-white">
      <h3 className="text-center text-5xl font-normal leading-relaxed dark:text-gray-300">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-10 p-4 md:gap-x-2">
        {projectsData.map((project) => (
          <div
            onClick={() => window.open(project.live, "_blank")}
            className="flex cursor-pointer flex-col justify-between gap-4 rounded-2xl p-3 text-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.2)] md:w-[60%] dark:bg-zinc-800 dark:text-gray-300"
          >
            <img
              src={project.src}
              alt=""
              className="overflow-hidden rounded-lg border border-gray-400 object-cover transition-all hover:scale-105 max-md:h-[250px] dark:border-none"
            />
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-between">
                <span className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
                  {project.name}
                </span>
                <FaGithub
                  size={24}
                  onClick={() => window.open(project.github, "_blank")}
                />
              </div>
              <div className="text-base font-normal leading-8">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-3 text-base">
                {project.tech.map((skill) => (
                  <span className="rounded-full border border-gray-500 px-3 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/saran1522?tab=repositories"
        className="flex items-center rounded-lg p-4 shadow-[0_0_15px_rgba(0,0,0,0.2)] md:gap-4"
        target="_blank"
      >
        <p className="font-CF">More Projects on GitHub</p>
        <IoPaperPlaneOutline />
      </a>
    </div>
  );
}

export default Reports;
