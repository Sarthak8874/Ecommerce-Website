import SearchContext from "./SearchContext";
import React, { useState } from "react";

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    localStorage.setItem("query", newQuery);
  };

  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
