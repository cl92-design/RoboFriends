import React from "react";

function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        className="pa3 ba b--black bg-lightest-blue"
        type="search"
        placeholde="Search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
