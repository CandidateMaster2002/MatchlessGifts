import React from "react";
import productsData from "../productsData";
import { calcPrice } from "../productsData";
import { useNavigate } from "react-router-dom";
import "/src/styles.css/ProductCard.css"
import { Link } from "react-router-dom";
const ProductCard = ({ obj }) => {
  const navigate = useNavigate();



  const discount = Math.round((obj.original_price-obj.price)*100/obj.original_price); 
  return (


    <div className="product-card-container">

      <Link  style={{ textDecoration: 'none' }}  to={`/single-product/${obj.id}`}>
      <div
        className="card"
        style={{ width: '10rem', height: '16rem', position: 'relative' }}
        onClick={() => {
          navigate(`/single-product/${obj.id}`);
        }}
      >
        {/* Orange box in the top right corner for discount */}
        {discount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'orange',
              color: 'white',
              padding: '0.2rem 0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
            }}
          >
            {discount}% Off
          </div>
        )}

        <img
          src={obj.img_url}
          className="card-img-top"
          alt="..."
          style={{ maxWidth: '100%', maxHeight: '65%', objectFit: 'contain' }}
        />

        <div className="card-body">
          <div className="brand-name">{obj.brand}</div>
          <div className="product-name">{obj.name}</div>
          <div className="price-div">
            <span>{"₹ " + obj.price + " "}</span>
            <span className="org-price">{"₹ " + obj.original_price}</span>
          </div>
          {/* <h6>{obj.rating}</h6> */}
        </div>
      </div>
      </Link>
    </div>

  );
};


export default ProductCard;
