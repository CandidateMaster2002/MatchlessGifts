import React, { useEffect, useState } from "react";
import axios from "../services/axios";
import FilterSideBar from "../components/FilterSideBar";
import ProductCard from "../components/ProductCard";
import SortingFilter from "../components/SortingFilter";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import PaginationFooter from "../components/PaginationFooter";
import "../styles.css/Products.css";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [filterOptions, setFilterOptions] = useState(() => {
    const storedFilterOptions = localStorage.getItem("filterOptions");
    return storedFilterOptions ? JSON.parse(storedFilterOptions) : {};
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [paginationAPIResponse, setPaginatedAPIResponse] = useState({
    content: [],
    pageNo: 1,
    pageSize: 12,
    totalElements: null,
    totalPages: null,
    lastPage: false,
  });

  const [pages, setPages] = useState(paginationAPIResponse.totalPages);

  const getFilteredAndPaginatedProducts = () => {
    axios
      .post(`/products/paginated/${currentPage}`, filterOptions)
      .then((response) => {
        setPaginatedAPIResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filtered products:", error);
      });
  };

  useEffect(() => {
    getFilteredAndPaginatedProducts();
    setPages(paginationAPIResponse.totalPages); // This line should be removed
  }, [filterOptions, currentPage]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <FilterSideBar
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          </div>
          <div className="col-md-8">
            <SearchBar
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
            <div className="row">
              {paginationAPIResponse?.content?.length > 0 ? (
                paginationAPIResponse.content.map((obj) => (
                  <div key={obj.id} className="col-md-4 mb-4">
                    <ProductCard obj={obj} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <h1>Sorry, No items to show</h1>
                  <img src="src/assets/empty shop.png" alt="" />
                  {/* Add an attractive image here */}
                  {/* For example: <img src="no-items-image.jpg" alt="No items to show" /> */}
                </div>
              )}
            </div>

            <PaginationFooter
              pages={paginationAPIResponse.totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
