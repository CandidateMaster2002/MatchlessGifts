import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaGifts } from "react-icons/fa6";
import {
  FaShopify,
  FaClipboardList,
  FaEnvelope,
  FaQuestion,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(0);

  const handleSignout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const buttonStyle = {
    padding: "8px 16px", // Adjust padding as needed
    marginRight: "8px", // Adjust margin as needed
    fontSize: "12px", // Adjust font size as needed
  };

  const iconStyle = {
    fontSize: "20px", // Adjust font size as needed to match the button size
    marginLeft: "8px", // Adjust margin as needed
  };

  const logoStyle = {
    fontSize: "60px",
    marginRight: "10px",
    marginBottom: "14px",
  };

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("loggedInUser"))?.userid);
  }, [localStorage.getItem("loggedInUser")]);

  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <Link
            to="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <FaGifts style={logoStyle} />
            <span class="fs-2">Matchless Gifts</span>
          </Link>

          <ul class="nav col-12 col-md-auto mb-2 mb-md-0">
            <li>
              <Link to="/shop" class="nav-link px-2 link-dark">
                {" "}
                <FaShopify /> Shop{" "}
              </Link>
            </li>

            <li>
              <Link to={`/cart`} class="nav-link px-2 link-dark">
                <FaShoppingCart /> My Cart
              </Link>
            </li>

            <li>
              <Link to={`/order-history`} class="nav-link px-2 link-dark">
                <FaClipboardList /> My Orders
              </Link>
            </li>
          </ul>

          {localStorage.getItem("loggedInUser") === null ? (
            <button
              type="button"
              class="btn btn-outline-primary me-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          ) : (
            <div>
              <button style={buttonStyle} onClick={handleSignout}>
                Signout
              </button>
              <Link className="linkRouter" to={`/user-profile`}>
                {" "}
                <CgProfile style={iconStyle} />
              </Link>
            </div>
          )}
        </header>
      </div>
    </div>
    //  <></>
  );
};

export default Header;
