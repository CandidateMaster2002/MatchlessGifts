import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const AdminAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const navigate = useNavigate();

  const orderStatusValues = [
    "Pending",
    "Dispatched",
    "Delivered",
    "Cancelled",
    "Returned",
    "Refunded",
  ];

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    axios
      .get(`/order/getAllOrders`)
      .then((response) => {
        setAllOrders(response.data);
      })
      .catch((error) => {
        navigate("/");
      });
  };

  const updateStatusByOrderId = (orderId, status) => {
    axios
      .post(`/order/changeStatus/${orderId}`, status)
      .then((response) => {
        getAllOrders();
        alert("Order status updated successfully");
      })
      .catch((error) => {
        console.error("Failed to update order status:", error);
      });
  };

  const OrderStatusSelect = ({ order }) => {
    const [selectedStatus, setSelectedStatus] = useState(order.orderStatus);

    const handleStatusChange = () => {
      updateStatusByOrderId(order.orderId, selectedStatus);
    };

    return (
      <div className="d-flex align-items-center">
        <span>{order.orderStatus}</span>
        <div className="d-flex flex-column align-items-center ms-2">
          <select
            className="form-select mb-2"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {orderStatusValues.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleStatusChange}
          >
            Update
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-uppercase font-weight-bold">Order ID</th>
            <th className="text-uppercase font-weight-bold">Order Status</th>
            <th className="text-uppercase font-weight-bold">Products</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td className="text-uppercase">
                <OrderStatusSelect order={order} />
              </td>
              <td>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Product Brand</th>
                      <th>Product Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product) => (
                      <tr key={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.productBrand}</td>
                        <td>{product.productCategory}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllOrders;
