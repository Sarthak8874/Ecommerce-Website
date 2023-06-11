import React, { useContext, useEffect, useState } from "react";
import FilterProductContext from "../context/FilterProductContext";

const Filter = () => {
  const {
    selectedPriceRange,
    handlePriceRangeChange,
    selectedRatingRange,
    handleRatingRangeChange,
    selectPriceSort,
    handlePriceSort,
  } = useContext(FilterProductContext);
  return (
    <>
      <section className="filter hidden md:block">
        <h3 className="text-center">Filter</h3>
        <div className="filter-container">
          <div className="filter-section mt-6 mb-6">
            <h4 className="font-bold mt-2 mb-2">Price Range</h4>
            <select
              className="price-range-select"
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
            >
              <option value="0-20000">All</option>
              <option value="0-250">0 - 250</option>
              <option value="250-500">250 - 500</option>
              <option value="500-20000">500+</option>
              {/* Add more price range options as needed */}
            </select>
          </div>
          <div className="filter-section mt-6 mb-6">
            <h4 className="font-bold mt-2 mb-2">Rating</h4>
            <select
              className="price-range-select"
              value={selectedRatingRange}
              onChange={handleRatingRangeChange}
            >
              <option value="0-5">All</option>
              <option value="0-1">0-1</option>
              <option value="1-2">1-2</option>
              <option value="2-3">2-3</option>
              <option value="3-4">3-4</option>
              <option value="4-5">4+</option>
              {/* Add more price range options as needed */}
            </select>
          </div>
          <div className="filter-section mt-6 mb-6">
            <h4 className="font-bold mt-2 mb-2">Sort Price</h4>
            <select
              className="price-range-select"
              value={selectPriceSort}
              onChange={handlePriceSort}
            >
              <option value="none">None</option>
              <option value="incr">Increase</option>
              <option value="decr">Decrease</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
