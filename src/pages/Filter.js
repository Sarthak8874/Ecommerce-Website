import React, { useState } from 'react';

const Filter = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  // Add more state variables for other filter options as needed

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="filter-section">
        <h4>Price Range</h4>
        <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
          <option value="">All</option>
          <option value="0-50">0 - 50</option>
          <option value="50-100">50 - 100</option>
          <option value="100-200">100 - 200</option>
          {/* Add more price range options as needed */}
        </select>
      </div>

      <div className="filter-section">
        <h4>Rating</h4>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home</option>
          {/* Add more category options as needed */}
        </select>
      </div>

      {/* Add more filter sections for other filter options as needed */}
    </div>
  );
};

export default Filter;
