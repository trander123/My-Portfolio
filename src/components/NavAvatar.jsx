import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export const NavAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-72 mb-5 sm:mb-10">
      <img
        src="./images/avatar.jpg"
        alt=""
        className=" w-48 h-48  rounded-full mb-2.5 sm:mb-5 object-cover"
      />
      <div className="flex flex-col text-center text-lg">
        <span className=" text-2xl mb-5 sm:mb-10 font-bold">
          Mico Gee M. Cuarto
        </span>
        <span className=" font-light">FRONTEND WEB DEVELOPER</span>
        <span>+63-9065347560</span>
        <span>cuartzmico@gmail.com</span>
        <span>
          <a href="https://github.com/trander123">
            <GitHubIcon />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100070423729021">
            <FacebookRoundedIcon />
          </a>
        </span>
      </div>
    </div>
  );
};
