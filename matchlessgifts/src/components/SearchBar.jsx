import React from "react";
import "/src/styles.css/SearchBar.css";

const SearchBar = ({ filterOptions, setFilterOptions }) => {

  const updateSearch=(e)=>{
    setFilterOptions({
      ...filterOptions,
      search: e.target.value,
    });
  };
  

  return (
    <form class="form-inline ">
      <input
        class="form-control form-control-sm mr-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={filterOptions.search}
        onChange={updateSearch}
      />
      <i class="fas fa-search" aria-hidden="true"></i>
    </form>
  );
};

export default SearchBar;


