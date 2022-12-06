import React from "react";
import { ContentWrapper } from "../wrappers/ContentWrapper";
import technologies from "../constants/technologies.json";
import { Link } from "react-router-dom";

export const Home = () => {
  const pageDescription =
    "These are the techonologies that I had been working with.";
  return (
    <ContentWrapper heading={"Techonologies"} description={pageDescription}>
      <div className="bg-slate-200 dark:bg-zinc-800 flex flex-wrap gap-4 w-full justify-center p-5 rounded-md mb-5">
        {technologies.map((technology) => (
          <div
            key={technology}
            className="w-20 h-20 p-4 rounded-full bg-white dark:bg-zinc-900 justify-center items-center"
          >
            <img src={`./icons/tech-icons/${technology}-icon.png`} alt="" />
          </div>
        ))}
      </div>
      <Link
        to={"/portfolio"}
        className="bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-700 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 text-white px-10 py-3 rounded-lg text-lg font-bold tracking-wider mb-5"
      >
        SEE MY WORKS
      </Link>
    </ContentWrapper>
  );
};
