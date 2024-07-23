import React from "react";
import { projectsData } from "../utils/projectsData";
import { FaGithub } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

function Projects() {
  return (
    <div className="mt-14 flex flex-col items-center text-primary-600 dark:text-white">
      <h3 className="text-center text-5xl font-normal leading-relaxed dark:text-gray-300">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-10 p-8 md:gap-x-28">
        {projectsData.map((project) => (
          <div className="flex flex-col gap-4 rounded-xl bg-[#f8fbfb] p-4 shadow-[0_0_15px_rgba(0,0,0,0.2)] md:w-[400px] dark:bg-primary-400">
            <img
              src={project.src}
              alt=""
              className="h-60 rounded-lg border border-gray-400 object-cover dark:border-none"
            />
            <span className="text-lg">{project.name}</span>
            <div className="flex justify-between">
              <a href={project.github} target="_blank">
                <FaGithub size={24} />
              </a>
              <a href={project.live} target="_blank">
                <IoPaperPlaneOutline size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <a
        href="https://github.com/saran1522"
        className="rounded-lg p-4 md:gap-4"
        target="_blank"
      >
        <p className="font-CF">
          Other Projects are not worth mentioning checkout them on GitHub
          <IoPaperPlaneOutline />
        </p>
      </a> */}
    </div>
  );
}

export default Projects;
