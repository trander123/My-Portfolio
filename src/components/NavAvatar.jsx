import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

export const NavAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-72 mb-5 sm:mb-10">
      <img
        src="./images/avatar.jpg"
        alt=""
        className="w-48 h-48  rounded-full mb-2.5 sm:mb-5 object-cover "
      />
      <div className="flex flex-col text-center text-lg">
        <span className=" text-2xl mb-5 sm:mb-10 font-bold">
          Mico Gee M. Cuarto
        </span>
        <span className="font-light">FRONTEND WEB DEVELOPER</span>
        <span>+63-9065347560</span>
        <span>
          <a href="mailto:cuartzmico@gmail.com">cuartzmico@gmail.com</a>
        </span>
        <div className="space-x-2 mt-2">
          <a
            rel="noreferrer"
            href="https://github.com/trander123"
            target={"_blank"}
            className=" hover:opacity-70"
          >
            <GitHubIcon />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/profile.php?id=100070423729021"
            className=" hover:opacity-70"
          >
            <FacebookIcon />
          </a>
          <a href="mailto:cuartzmico@gmail.com" className=" hover:opacity-70">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
