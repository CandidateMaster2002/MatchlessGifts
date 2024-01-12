import React, { useEffect, useState } from 'react';
import '/src/styles.css/OrderHistory.css';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';
const OrderHistory = () => {
  const [userId, SetUserId] = useState(JSON.parse(localStorage.getItem('loggedInUser'))?.userid);
  const [orders, setOrders] = useState();

  const navigate=useNavigate()

  const getOrdersByUserId = () => {
    axios
      .get(`/order/${userId}/getOrders`)
      .then((response) => {
        setOrders(response.data);
        if(orders?.length===0) navigate("/no-orders")
        console.log(response.data);
      })
      .catch((error) => {
        navigate('/not-found');
      });
  };

  useEffect(() => {
    getOrdersByUserId();
  }, [userId]);

  const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  return (
    <>
      {userId ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-uppercase font-weight-bold">Order ID</th>
                <th className="text-uppercase font-weight-bold">Order Status</th>
                <th className="text-uppercase font-weight-bold">Products</th>
                <th className="text-uppercase font-weight-bold">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td className="text-uppercase">{order.orderStatus}</td>
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
                        {order.products?.map((product) => (
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
                  <td>{calculateTotalAmount(order.products)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default OrderHistory;
