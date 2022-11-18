import { BusinessCenter, Email, Home, Info } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import { handleToggleNavBar } from "../helpers/handleToggleNavBar";
import { NavAvatar } from "./NavAvatar";

export const Navbar = () => {
  const handleToggleOnMobile = () => {
    if (window.screen.width <= 640) {
      handleToggleNavBar();
    }
  };
  return (
    <div className="nav-bar flex flex-col bg-gradient-to-tl from-blue-700 via-blue-400 to-blue-700 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 px-4 py-8 min-h-screen text-white">
      <NavAvatar />
      <hr />
      <div className="flex flex-col mt-10 sm:mt-20 space-y-5 text-xl">
        <NavLink onClick={handleToggleOnMobile} to="/">
          <Home /> Home
        </NavLink>
        <NavLink onClick={handleToggleOnMobile} to="/portfolio">
          <BusinessCenter /> My Portfolio
        </NavLink>
        <NavLink onClick={handleToggleOnMobile} to="/about">
          <Info /> About Me
        </NavLink>
        <NavLink onClick={handleToggleOnMobile} to="/contact">
          <Email /> Contact Me
        </NavLink>
      </div>
    </div>
  );
};
