import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axios";
import CustomerReviews from "../components/CustomerReviews";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [addedtoCart, setAddedToCart] = useState(false);

  const incrementValue = () => {
    setQuantity(quantity + 1);
  };

  const decrementValue = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const productDescriptions = {
    Watches:
      "Introducing our premium ChronoMaster Series Watch. This sophisticated timepiece boasts a stainless steel case, sapphire crystal, and a precision Swiss movement. The elegant design, combined with features like chronograph functionality and a genuine leather strap, makes it a must-have for watch enthusiasts who appreciate both style and functionality.",
    Tshirts:
      "Unleash your urban style with our StreetFlex Graphic Tee. Crafted from high-quality cotton, this T-shirt showcases a unique street art-inspired design. The comfortable fit and breathable fabric make it ideal for everyday wear. Stand out from the crowd and express your individuality with this eye-catching T-shirt.",
    Jeans:
      "Discover the epitome of comfort and style with our UrbanFlex Slim Fit Jeans. Tailored from premium stretch denim, these jeans offer a sleek and modern silhouette without compromising on flexibility. The distressed details and faded wash add a touch of urban edge, making them a versatile choice for casual outings or a night on the town.",
    Shoes:
      "Step into luxury with our Heritage Leather Oxford Shoes. Meticulously crafted from full-grain leather, these oxfords exude sophistication and timeless elegance. The hand-stitched detailing and leather lining ensure maximum comfort and durability. Elevate your formal attire with these impeccable shoes that seamlessly blend classic style with modern craftsmanship.",
  };

  const { id } = useParams();

  const [userId, setUserId] = useState(0);

  const handleAddToCart = (e) => {
    e.preventDefault();

    const obj = {
      userId: userId,
      productId: id,
      quantity: quantity,
    };

    console.log(obj);

    axios
      .get(`cart/${userId}/add/${id}/${quantity}`)
      .then((response) => {
        console.log("Response from API:", response.data);
        setAddedToCart(true)
      })
      .catch((error) => {
        console.error("Error callling API:", error.message);
      });
  };

  const [product, setProduct] = useState({
    arrivalDateTime: "",
    brand: "",
    category: "",
    details: "",
    id: "",
    img_url: "",
    name: "",
    original_price: "",
    price: "",
  });

  const getProductById = () => {
    axios
      .get(`/products/getbyid/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => setProduct(""));
  };
  useEffect(getProductById, []);
  console.log(product.img_url);

  const discount = Math.round(
    ((product.original_price - product.price) * 100) / product.original_price
  );

  const addLeadingSlash = (path) => {
    return path.startsWith("/") ? path : `/${path}`;
  };

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("loggedInUser"))?.userid);
  }, [localStorage.getItem("loggedInUser")]);

  return (
    <div>
      <main class="mt-5 pt-4">
        <div class="container mt-5">
          <div class="row">
            <div className="col-md-6 mb-4">
              <img
                src={addLeadingSlash(product.img_url)}
                className="img-fluid"
                alt="Image unable to load"
              />
            </div>

            <div class="col-md-6 mb-4">
              <div class="p-4">
                <div class="mb-4">
                  <span class="badge bg-dark me-1" style={{ fontSize: "14px" }}>
                    {product.category}
                  </span>
                  <span class="badge bg-info me-1" style={{ fontSize: "14px" }}>
                    {product.brand}
                  </span>
                  <span
                    class="badge bg-danger me-1"
                    style={{ fontSize: "14px" }}
                  >
                    Trending
                  </span>
                </div>

                <p class="lead">
                  <span class="me-1 text-muted" style={{ fontSize: "14px" }}>
                    <del>₹{product.original_price}</del>
                  </span>
                  <span style={{ fontSize: "20px" }}>₹{product.price}</span>
                  <span style={{ fontSize: "16px", color: "green" }}>
                    {" "}
                    ({discount}% off)
                  </span>
                </p>

                <strong>
                  <p style={{ fontSize: "20px" }}>Description</p>
                </strong>

                <p>{product.details}</p>

                <form className="d-flex">
                  <div
                    className="form-outline me-1 d-flex align-items-center"
                    style={{ width: "100px" }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={decrementValue}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      type="button"
                      className="btn btn-secondary mx-1"
                      onClick={incrementValue}
                    >
                      +
                    </button>

                    {addedtoCart === false ? (
                      <button
                        className="btn btn-primary ms-1"
                        type="submit"
                        onClick={handleAddToCart}
                      >
                        Add to cart{" "}
                        <i className="fas fa-shopping-cart ms-1"></i>
                      </button>
                    ) : (
                      <div style={{                       
                        cursor: 'inherit',
                      }} className="btn btn-success">Added to cart !</div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <hr />

          <div class="row d-flex justify-content-center">
            <div class="col-md-9 text-center">
              <h4 class="my-4 h4">Additional Information </h4>

              <p>{productDescriptions[product.category]}</p>
            </div>
          </div>

          <hr />

          <CustomerReviews category={product.category} />
        </div>
      </main>
    </div>
  );
};

export default SingleProduct;
