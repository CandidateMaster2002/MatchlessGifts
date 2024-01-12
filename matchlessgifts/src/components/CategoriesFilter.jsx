import React from "react";

const CategoriesFilter = () => {
  const categories = ["Shoes", "Watches", "Tshirts", "Jeans"];

  return (
    <div class="box border-bottom">
      <label className="box-label text-uppercase d-flex align-items-center">
        {" "}
        CATEGORIES
      </label>
      <div
        style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
      >
        <div style={{ marginRight: "20px" }}>
          {categories.slice(0, Math.ceil(categories.length / 2)).map((category) => (
            <div key={category} style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "5px" }}>
                <input type="checkbox" name="category" value={category} />{" "}
                {category}
              </label>
            </div>
          ))}
        </div>
        <div>
          {categories.slice(Math.ceil(categories.length / 2)).map((category) => (
            <div key={category} style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "5px" }}>
                <input type="checkbox" name="category" value={category} />{" "}
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilter;
