import { projectsData } from "../utils/projectsData";
import { VscGithubAlt } from "react-icons/vsc";
import { GoLinkExternal } from "react-icons/go";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Heading from "./Heading";

function Projects() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <Heading title="Projects" />
      <div className="flex flex-wrap justify-center gap-10 p-4 md:gap-x-2">
        {projectsData.map((project) => (
          <div
            key={project.name}
            onClick={() => window.open(project.live, "_blank")}
            className="flex cursor-pointer flex-col justify-between gap-4 overflow-hidden rounded-3xl border border-gray-300 md:w-[60%] dark:border-gray-800 max-md:dark:border-gray-700"
          >
            <img
              src={project.src}
              alt=""
              className="object-cover transition-all hover:scale-105 max-md:h-[250px] dark:border-none"
            />
            <div className="flex flex-col gap-3 p-5">
              <div className="flex w-full justify-between">
                <span className="text-2xl font-semibold">{project.name}</span>
                <div className="flex items-center gap-4 font-bold">
                  {/* <span className="text-xl font-light">Links: </span> */}
                  <GoLinkExternal
                    size={24}
                    onClick={() => window.open(project.github, "_blank")}
                  />
                  <VscGithubAlt
                    size={24}
                    onClick={() => window.open(project.github, "_blank")}
                  />
                </div>
              </div>
              <div className="text-base font-normal leading-8">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-3 text-base">
                {project.tech.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-300 px-3 py-1 text-sm dark:border-gray-700"
                  >
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
        className="flex items-center rounded-xl border border-gray-300 p-4 md:gap-4 dark:border-gray-700"
        target="_blank"
      >
        <p className="font-CF">More Projects on GitHub</p>
        <IoPaperPlaneOutline />
      </a>
    </div>
  );
}

export default Projects;
