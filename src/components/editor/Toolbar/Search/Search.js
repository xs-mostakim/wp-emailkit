import React, { useState } from "react";

export const Search = ({ title }) => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium" },
    { name: "India" },
    { name: "Bolivia" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />

      {countries
        .filter((country) => {
          if (searchInput === "") {
            return country;
          } else if (
            country.name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country, index) => (
          <div key={index}>
            <h1>{country.name}</h1>
          </div>
        ))}
    </div>
  );
};
