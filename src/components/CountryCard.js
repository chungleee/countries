import React from "react";

const CountryCard = ({ capital, flag, name, population, region }) => {
  return (
    <div className="bg-primaryWhite mb-4 rounded shadow">
      <div className="bg-red-500 relative pb-1/2">
        <img
          className="absolute h-full w-full object-cover"
          src={`${flag}`}
          alt={`${name}'s flag`}
        />
      </div>
      <div className="font-semibold px-6 py-8">
        <h1 className="font-bold mb-4 text-xl">{name}</h1>
        <p>
          Population:{" "}
          <span className="font-normal">
            {Number(population).toLocaleString()}
          </span>
        </p>
        <p>
          Region: <span className="font-normal">{region}</span>
        </p>
        <p>
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
