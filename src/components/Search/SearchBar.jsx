import React from "react";
import "./SearchBar.scss";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../App.js";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);

  const [searched, setSearched] = useState("");

  const handleChange = (e) => {
    setSearched(e.target.value);
  };

  const handleSubmit = () => {
    if (searched !== "") {
      setSearch(searched);
    }
  };

  useEffect(() => {
    const searchBar = document.getElementById("inputBar");
    searchBar.value = search;
  }, [search]);

  return (
    <div className="SearchBar">
      <input
        placeholder="Search players..."
        onChange={handleChange}
        id="inputBar"
      />
      <SearchIcon
        className={searched.length === 0 ? "search" : "search enable"}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default SearchBar;
