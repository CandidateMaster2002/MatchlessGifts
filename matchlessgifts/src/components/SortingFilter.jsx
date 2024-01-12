import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SortingFilter = () => {
  const [sortBy, setSortBy] = useState("Price:Low to High");

  const sortByOptions = [
    "Price:Low to High",
    "Price:High to Low",
    "None",
  ];

  return (
    <div className="box border-bottom">
      <div>
        <label className="box-label text-uppercase d-flex align-items-center">
          {" "}
          Sort By:
        </label>

        {sortByOptions.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              id={`sortByOption-${index}`}
              name="sortBy"
              className="form-check-input"
              value={option}
              checked={sortBy === option}
              onChange={() => setSortBy(option)}
            />
            <label
              htmlFor={`sortByOption-${index}`}
              className="form-check-label"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingFilter;
