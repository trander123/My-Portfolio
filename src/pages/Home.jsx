import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-5/6">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className=" font-bold text-xl">HELLO THERE !</span>
        <span className=" font-light text-xs">GREETINGS FROM</span>
        <h1 className=" font-bold text-3xl">MICO GEE M. CUARTO</h1>
        <span className=" font-light text-xs">
          THANK YOU FOR VISING MY WEB PORTFOLIO!
        </span>
      </div>
      <div className="mt-10">
        <Link
          to="/portfolio"
          className=" bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-700 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 font-bold text-white px-4 py-2 rounded-md hover:opacity-80 text-lg"
        >
          See my works
        </Link>
      </div>
    </div>
  );
};
