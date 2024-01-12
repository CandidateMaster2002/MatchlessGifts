import React, { useState } from "react";
import "../styles.css/AddProduct.css";
import { backend_urls } from "../services/backend_urls";
import { Link } from "react-router-dom";
import axios from "../services/axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "Shoes",
    brand: "Adidas",
    original_price: "",
    price: "",
    details: "",
    img_url: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post("/products/addproduct", product)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log("Some error occured .Please try again");
        alert(error.response);
      });
  };

  return (
    <>
      <h1>Hi, Admin</h1>

      <h2>Add a New Product to Database</h2>
      <br />


      <form>
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={product.name}
          onChange={handleInputs}
          name="name"
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={product.category}
          onChange={handleInputs}
          name="category"
          required
        >
          <option value="Shoes">Shoes</option>
          <option value="Watches">Watches</option>
          <option value="Jeans">Jeans</option>
          <option value="TShirts">T-Shirts</option>
        </select>

        <label htmlFor="brand">Brand:</label>
        <select
          id="brand"
          value={product.brand}
          onChange={handleInputs}
          name="brand"
          required
        >
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
          <option value="Converse">Converse</option>
          <option value="Fastrack">Fastrack</option>
        </select>

        <label htmlFor="original_price">Original Price (in ₹):</label>
        <input
          type="number"
          id="original_price"
          value={product.original_price}
          onChange={handleInputs}
          name="original_price"
          required
        />

        <label htmlFor="price">Discounted Price (in ₹):</label>
        <input
          type="number"
          id="price"
          value={product.price}
          onChange={handleInputs}
          name="price"
          required
        />

        <label htmlFor="details">Details:</label>
        <input
          type="text"
          id="details"
          value={product.details}
          onChange={handleInputs}
          name="details"
          rows="4"
          required
        ></input>

        <label htmlFor="img_url">Image URL:</label>
        <input
          type="text"
          id="img_url"
          value={product.img_url}
          onChange={handleInputs}
          name="img_url"
          required
        />

        <button type="submit" onClick={handleAddProduct}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddProduct;
