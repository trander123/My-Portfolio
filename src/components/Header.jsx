import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { handleToggleNavBar } from "../helpers/handleToggleNavBar";

export const Header = ({ isDark, handleToggleTheme }) => {
  return (
    <div className="flex justify-between w-full ">
      <Menu
        fontSize="large"
        className=" cursor-pointer"
        onClick={handleToggleNavBar}
      />
      {isDark ? (
        <LightMode
          fontSize="large"
          onClick={handleToggleTheme}
          className=" cursor-pointer"
        />
      ) : (
        <DarkMode
          fontSize="large"
          onClick={handleToggleTheme}
          className=" cursor-pointer"
        />
      )}
    </div>
  );
};
