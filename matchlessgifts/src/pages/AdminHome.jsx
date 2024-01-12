import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const AdminHome = () => {

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* <h1 className="text-center mb-4">Click any one</h1> */}
          <div className="d-grid gap-3">
            <Link to="/admin/all-orders" className="btn btn-primary btn-lg">
              Get Order History
            </Link>
            <Link to="/admin/all-products" className="btn btn-success btn-lg">
              View All Products
            </Link>
            <Link to="/admin/add-product/" className="btn btn-danger btn-lg">
              Add a Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
