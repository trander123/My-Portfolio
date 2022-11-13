import React from "react";
import { NavLink } from "react-router-dom";
import { NavAvatar } from "./NavAvatar";

export const Navbar = () => {
  return (
    <div className=" flex flex-col bg-slate-500 px-4 py-8 min-h-screen">
      <div className="flex flex-col justify-center items-center w-72">
        <NavAvatar/>
      </div>
      <div className="flex flex-col">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">My Portfolio</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
    </div>
  );
};
