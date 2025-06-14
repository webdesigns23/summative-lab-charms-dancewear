import React from "react";


function Search({ searchTerm, handleSearchChange }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Dancewear by Style:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a style name to search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
