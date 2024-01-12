import React from "react";
import { useState, useEffect } from "react";
import axios from "../services/axios";

const CartItem = ({
  cartItemObj,
  deleteCartItem,
  incrementByOne,
  decrementByOne,
  checkedForOrder,
  setCheckedForOrder,
}) => {
  //const [userId, setUserId] = useState();

  const toggleCheckbox = (cartId) => {
    setCheckedForOrder((prevCheckedForOrder) => ({
      ...prevCheckedForOrder,
      [cartId]: !prevCheckedForOrder[cartId],
    }));
  };

  const addLeadingSlash = (path) => {
    return path.startsWith("/") ? path : `/${path}`;
  };

 

  return (
    <div>
      <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-1 col-lg-1 col-xl-1">
          <input
            type="checkbox"
            value={checkedForOrder[cartItemObj.cartId]}
            onChange={() => toggleCheckbox(cartItemObj.cartId)}
          />
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src={addLeadingSlash(cartItemObj.product.img_url)}
            class="img-fluid rounded-3"
            alt="Image not loaded"
          />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">
            {cartItemObj.product.brand} {cartItemObj.product.category}
          </h6>
          <h6 class="text-black mb-0">{cartItemObj.product.name}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
          <button
            class="btn btn-link px-2"
            onClick={() => decrementByOne(cartItemObj.cartId)}
          >
            <i class="fas fa-minus"></i>
          </button>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            {cartItemObj.quantity}
          </span>

          <button
            class="btn btn-link px-2"
            onClick={() => incrementByOne(cartItemObj.cartId)}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <div
          class="col-md-3 col-lg-2 col-xl-2 offset-lg-1"
          style={{ marginLeft: "-60px" }}
        >
          <h6 class="mb-0">₹ {cartItemObj.product.price}</h6>
        </div>
        <div
          class="col-md-1 col-lg-1 col-xl-1 text-end"
          style={{ marginLeft: "-60px" }}
        >
          <i
            class="fas fa-times"
            onClick={() => deleteCartItem(cartItemObj.cartId)}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
