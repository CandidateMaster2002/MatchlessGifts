import React, { useState } from 'react';

const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState({

    minPrice: 0,
    maxPrice: 1000,
  });

  const handleMinPriceChange=(e)=>{
setPriceRange({
  ...priceRange, minPrice: parseInt(e.target.value, 10) || 0
})
  }
  const handleMaxPriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      maxPrice: parseInt(e.target.value, 10) || 20000,
    });
  };

  return (
    <>
      <div class="box border-bottom">
        <label className="box-label text-uppercase d-flex align-items-center">
          {" "}
          Price (in Rs.)
        </label>

        <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
          <input
            type="text"
            placeholder="Min"
            value={priceRange.minPrice}
            style={{ marginRight: "10px", padding: "5px" }}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            placeholder="Max"
            value={priceRange.maxPrice}
            style={{ marginRight: "10px", padding: "5px" }}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
