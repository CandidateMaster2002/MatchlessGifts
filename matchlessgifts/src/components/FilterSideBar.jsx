import React, { useEffect, useState } from "react";
import SortingFilter from "./SortingFilter";
import "/src/styles.css/FilterSideBar.css";
import CategoriesFilter from "./CategoriesFilter";
import BrandsFilter from "./BrandsFilter";
import PriceFilter from "./PriceFilter";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FilterSideBar = ({ filterOptions, setFilterOptions }) => {
  const sortByOptions = ["Price:Low to High", "Price:High to Low", "None"];
  const brands = ["Reebok", "Puma", "Nike", "Adidas", "Fastrack", "Converse"];
  const categories = ["Shoes", "Watches", "Tshirts", "Jeans"];

  const handleReset = () => {
    const defaultFilterOptions = {
      sortingMethod: "None",
      categories: [],
      brands: [],
      minPrice:0,
      maxPrice:50000,
      search:""
      
    };

    localStorage.setItem("filterOptions", JSON.stringify(defaultFilterOptions));
    setFilterOptions(defaultFilterOptions);
  };

  const handleSortByClick = (option) => {
    setFilterOptions({
      ...filterOptions,
      sortingMethod: option,
    });
  };

  const handleBrandChange = (brand) => {
    const isChecked = filterOptions.brands.includes(brand);
    const updatedBrands = isChecked
      ? filterOptions.brands.filter((bran) => bran !== brand)
      : [...filterOptions.brands, brand];
    setFilterOptions({
      ...filterOptions,
      brands: updatedBrands,
    });
  };

  const handleCategoryChange = (category) => {
    const isChecked = filterOptions.categories.includes(category);
    const updatedCategories = isChecked
      ? filterOptions.categories.filter((cat) => cat !== category)
      : [...filterOptions.categories, category];
    setFilterOptions({
      ...filterOptions,
      categories: updatedCategories,
    });
  };

  const handleMinPriceChange = (e) => {

    setFilterOptions({
      ...filterOptions,
      minPrice: parseInt(e.target.value, 10) || 0
    });

  };

  const handleMaxPriceChange = (e) => {

    setFilterOptions({
      ...filterOptions,
      maxPrice: parseInt(e.target.value, 10) || 0
    });

  };

  useEffect(() => {
    localStorage.setItem("filterOptions", JSON.stringify(filterOptions));
  }, [filterOptions]);

  return (
    <div className="container" style={{backgroundColor:"white"}}>
    <div className="my-5">
      <div className="collapses">
        <div className="box border-bottom">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Clear Filters
          </button>
        </div>

        <div className="box border-bottom">
          <div>
            <label className="box-label text-uppercase d-flex align-items-center">
              Sort By:
            </label>
            {sortByOptions.map((option, index) => (
        <div key={index} className="form-check">
          <input
            type="radio"
            id={`sortByOption-${index}`}
            name="sortingMethod"
            className="form-check-input"
            value={option}
            checked={filterOptions.sortingMethod === option}
            onChange={() => handleSortByClick(option)}
          />
          <label htmlFor={`sortByOption-${index}`} className="form-check-label">
            {option}
          </label>
        </div>
      ))}
          </div>
        </div>

        <div className="box border-bottom">
          <label className="box-label text-uppercase d-flex align-items-center">
            CATEGORIES
          </label>
          <div className="form-check">
            {categories.map((category) => (
              <div key={category} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`category-${category}`}
                  value={category}
                  checked={filterOptions.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`category-${category}`}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="box border-bottom">
          <label className="box-label text-uppercase d-flex align-items-center">
            Brands
          </label>
          <div className="form-check">
            {brands.map((brand) => (
              <div key={brand} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`brand-${brand}`}
                  value={brand}
                  checked={filterOptions.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`brand-${brand}`}
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="box border-bottom">
          <label className="box-label text-uppercase d-flex align-items-center">
            Price (in Rs.)
          </label>

          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Min"
              value={filterOptions.minPrice}
              className="form-control"
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              placeholder="Max"
              value={filterOptions.maxPrice}
              className="form-control"
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


export default FilterSideBar;
