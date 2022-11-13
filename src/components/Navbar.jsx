import { BusinessCenter, Email, Home, Info } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavAvatar } from "./NavAvatar";

export const Navbar = () => {
  return (
    <div className="nav-bar flex flex-col bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-700 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 px-4 py-8 min-h-screen text-white">
      <div className="flex flex-col justify-center items-center w-72 mb-5 sm:mb-10">
        <NavAvatar />
      </div>
      <hr />
      <div className="flex flex-col mt-10 sm:mt-20 space-y-5 text-xl">
        <NavLink to="/">
          <Home /> Home
        </NavLink>
        <NavLink to="/portfolio">
          <BusinessCenter /> My Portfolio
        </NavLink>
        <NavLink to="/about">
          <Info /> About Me
        </NavLink>
        <NavLink to="/contact">
          <Email /> Contact Me
        </NavLink>
      </div>
    </div>
  );
};
