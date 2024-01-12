import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3 " style={{ textDecoration: 'none', color: 'inherit' }} >
            <li class="nav-item">
              <Link  class="nav-link px-2 text-muted" to="/">Home</Link>
            
            </li>
            <li class="nav-item">
              <Link to="/contact-us" class="nav-link px-2 text-muted">
                Contact us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/faqs" class="nav-link px-2 text-muted">
                FAQs
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin" class="nav-link px-2 text-muted">
                Admin Portal
              </Link>
            </li>
          
          </ul>
          <p class="text-center text-muted">© 2024 Matchless Gifts, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
