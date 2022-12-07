import { ContentWrapper } from "../wrappers/ContentWrapper";
import datas from "../constants/porfolio.json";
import { useEffect, useState } from "react";
import { sortByDate } from "../helpers/sortByDate";
import { dateFormatter } from "../helpers/dateFormatter";

export const Portfolio = () => {
  const pageDescription =
    "Here are some of my projects ordered from most recent.";
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(sortByDate(datas));
  }, []);
  return (
    <ContentWrapper heading={"My Portfolio"} description={pageDescription}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center mb-6 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={project.projName + index}
            className="relative flex flex-col items-center px-4 py-6 bg-slate-200 rounded-md dark:bg-zinc-800 ease-in-out duration-150 hover:scale-105 max-w-xs re"
          >
            <img src={project.imgUrl} alt="" className=" w-full" />
            <div className="flex space-x-2 mt-4">
              {project.technologies.map((technology, index) => (
                <div
                  key={technology + index}
                  className="w-10 h-10 p-2 rounded-full bg-white dark:bg-zinc-900 flex justify-center items-center"
                >
                  <img
                    src={`./icons/tech-icons/${technology}-icon.png`}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col my-4">
              <span className=" font-bold">{project.projName}</span>

              <span>{project.description}</span>
            </div>
            <p className="text-xs opacity-30 absolute bottom-6">
              {dateFormatter(project.date)}
            </p>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};
