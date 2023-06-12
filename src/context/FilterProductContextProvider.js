import React, { useState } from "react";
import FilterProductContext from "./FilterProductContext";

const FilterProductContextProvider = ({ children }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState("0-20000");
  const [selectedRatingRange, setSelectedRatingRange] = useState("0-5");
  const [selectPriceSort, setselectPriceSort] = useState("none");
  
  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange((event.target)?event.target.value : event);
  };

  const handleRatingRangeChange = (event) => {
    setSelectedRatingRange((event.target)?event.target.value : event);
  };

  const handlePriceSort = (event) => {
    setselectPriceSort((event.target)?event.target.value : event);
  };
  return (
    <FilterProductContext.Provider value={{selectedPriceRange, handlePriceRangeChange,selectedRatingRange,handleRatingRangeChange,selectPriceSort,handlePriceSort}}>
      {children}
    </FilterProductContext.Provider>
  );
};

export default FilterProductContextProvider;