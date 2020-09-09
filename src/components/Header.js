import React from "react";
import { Link } from "react-router-dom";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header
      className={`bg-primaryWhite  flex justify-between px-8 py-6 shadow ${
        darkMode ? "bg-darkBlue" : null
      }`}
    >
      <Link className="font-bold text-xl" to="/">
        Where in the world?
      </Link>
      <div className="flex" onClick={toggleDarkMode} role="button">
        <span className="mr-2">{darkMode ? <SunIcon /> : <MoonIcon />}</span>
        <p className="">Dark Mode</p>
      </div>
    </header>
  );
};
export default Header;
