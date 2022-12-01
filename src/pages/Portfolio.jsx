import React from "react";
import datas from "../datas/porfolioData.json";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className=" text-2xl font-bold mb-5">My Projects</span>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center mb-6 2xl:grid-cols-4">
        {datas.map((project, index) => (
          <div
            key={project.projName+index}
            className=" flex flex-col items-center px-4 py-6 bg-slate-200 rounded-md dark:bg-zinc-800 ease-in-out duration-150 hover:scale-105 max-w-xs"
          >
            <img src={project.imgUrl} alt="" className=" w-full" />
            <div className="flex space-x-2 mt-4">
              {project.technologies.map((techonology, index) => (
                <div
                  key={techonology+index}
                  className=" w-10 h-10 p-2 rounded-full bg-white dark:bg-zinc-900 flex justify-center items-center"
                >
                  <img src={`./icons/${techonology}-icon.png`} alt="" />
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-4">
              <span className=" font-bold">{project.projName}</span>
              <span>{project.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
