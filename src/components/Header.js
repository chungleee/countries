import React from "react";
import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className="bg-primaryWhite  flex justify-between px-8 py-6  shadow">
      <p className="font-bold text-xl">Where in the world?</p>
      <div className="flex" role="button">
        <span className="mr-2">
          <MoonIcon />
        </span>
        <p className="">Dark Mode</p>
      </div>
    </header>
  );
};
export default Header;
