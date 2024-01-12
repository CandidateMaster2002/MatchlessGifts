import React from "react";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";

const AdminAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = () => {
    axios
      .get("/products/allproducts")
      .then((response) => setAllProducts(response.data))
      .catch((error) => setAllProducts(""));
  };

  const handleEdit = (id) => {
    navigate(`/admin/modify-product/${id}`);
  };


  const handleDelete = (productId) => {
    axios
      .get(`/products/deleteProduct/${productId}`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => console.log(error));
    
  };

  
  useEffect(() => {
    getAllProducts();
  }, [allProducts]);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Details</th>
            {/* <th>Image URL</th> */}
            <th>Name</th>
            <th>Original Price</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allProducts?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.details}</td>
              {/* <td>{product.img_url}</td> */}
              <td>{product.name}</td>
              <td>{product.original_price}</td>
              <td>{product.price}</td>
              <td style={{ textAlign: "center" }}>
                <MdEdit
                  onClick={() => handleEdit(product.id)}
                  style={{ fontSize: "2em", cursor: "pointer" }}
                />
              </td>
              <td style={{ textAlign: "center" }}>
                <FaTrash
                  onClick={() => handleDelete(product.id)}
                  style={{ fontSize: "1.8em", cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllProducts;
