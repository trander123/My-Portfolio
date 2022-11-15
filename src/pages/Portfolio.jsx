import React from "react";
import datas from "../datas/porfolioData.json";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className=" text-2xl font-bold mb-5">My Projects</span>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center mb-6 ">
        {datas.map((d, i) => (
          <div
            key={i}
            className=" flex flex-col items-center px-4 py-6 bg-gray-200 rounded-md dark:bg-zinc-800 ease-in-out duration-150 hover:scale-105"
          >
            <img src={d.imgUrl} alt="" className=" w-full" />
            <div className="flex flex-col mt-4">
              <span>Name: {d.projName}</span>
              <span>description: {d.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
