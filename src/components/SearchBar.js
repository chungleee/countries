import React from "react";
import SearchIcon from "./icons/SearchIcon";

const SearchBar = ({ handleInputValue }) => {
  return (
    <div className="bg-white flex mb-6 rounded px-8 py-4 shadow md:w-1/2">
      <SearchIcon />
      <input
        className="ml-6 outline-none"
        type="text"
        placeholder="Search for a country..."
        onChange={handleInputValue}
      />
    </div>
  );
};

export default SearchBar;
