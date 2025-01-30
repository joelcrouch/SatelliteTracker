import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (satelliteID: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [satelliteId, setSatelliteId] = useState("");

  const handleSearch = () => {
    onSearch(satelliteId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Satellite ID"
        value={satelliteId}
        onChange={(e) => setSatelliteId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

// The searhcbar component is a simple input field and a button. The input field is used to enter the satellite ID and the button is used to trigger the search. The searchbar component is a functional component that uses the useState hook to manage the state of the satellite ID input field. The onSearch prop is a function that is called when the search button is clicked. The satellite ID entered by the user is passed to the onSearch function as an argument.
