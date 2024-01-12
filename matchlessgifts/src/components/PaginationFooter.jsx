import React from "react";

const PaginationFooter = ({ pages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button
             style={{
                backgroundColor: page === currentPage ? "#007bff" : "inherit",
                color: page === currentPage ? "#fff" : "inherit",
                borderColor: page === currentPage ? "#007bff" : "inherit",
              }}
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationFooter;
