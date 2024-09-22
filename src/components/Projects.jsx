import React from "react";
import { projectsData } from "../utils/projectsData";
import { FaGithub } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="mt-14 flex flex-col items-center text-primary-600 dark:text-white">
      <h3 className="text-center text-5xl font-normal leading-relaxed dark:text-gray-300">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-10 p-4 md:gap-x-2">
        {projectsData.map((project) => (
          <div
            onClick={() => window.open(project.live, "_blank")}
            className="flex cursor-pointer justify-between gap-4 rounded-2xl p-6 text-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.2)] max-md:flex-col md:h-[350px] md:w-[80%] lg:w-[65%] dark:bg-primary-400 dark:text-gray-300"
          >
            <img
              src={project.src}
              alt=""
              className="overflow-hidden rounded-lg border border-gray-400 object-cover transition-all hover:scale-105 md:w-1/2 dark:border-none"
            />
            <div className="flex flex-col gap-3 md:w-1/2">
              <div className="flex w-full justify-between">
                <span className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
                  {project.name}
                </span>
                <FaGithub
                  size={24}
                  onClick={() => window.open(project.github, "_blank")}
                />
              </div>
              {/* <div className="flex gap-5">
                <span>Tech Stack: </span>
                <div className="flex flex-wrap gap-5">
                  {project.tech.map((t) => {
                    let T = t;
                    return <T size={24} />;
                  })}
                </div>
              </div> */}
              <div className="text-xl font-light leading-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates magni consequatur repellat fugit? Quia est magnam
                voluptatibus doloribus accusantium!
              </div>
              <div className="flex flex-wrap gap-5">
                {project.tech.map((t) => {
                  let T = t;
                  return <T size={24} />;
                })}
              </div>
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
