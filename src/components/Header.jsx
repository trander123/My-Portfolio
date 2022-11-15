import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { useState } from "react";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    isDark
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
    setIsDark(!isDark);
  };

  const toggleNavBar = () => {
    document.querySelector(".nav-bar").style.display = isHidden
      ? "inline"
      : "none";
    setIsHidden(!isHidden);
  };
  return (
    <div className="flex justify-between w-full">
      <Menu
        fontSize="large"
        className=" cursor-pointer"
        onClick={toggleNavBar}
      />
      {isDark ? (
        <LightMode
          fontSize="large"
          onClick={toggleTheme}
          className=" cursor-pointer"
        />
      ) : (
        <DarkMode
          fontSize="large"
          onClick={toggleTheme}
          className=" cursor-pointer"
        />
      )}
    </div>
  );
};
