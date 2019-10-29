import React from "react";

  const SearchBar = ({ handleKeywordChange, handlechecked}) => {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => handleKeywordChange(e.target.value)} 
            />
          <p>
            <input type="checkbox" onChange={handlechecked} />
          </p>
        </form>
      );
    };
export default SearchBar;