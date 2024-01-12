import React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaGifts } from "react-icons/fa6";
const AdminHeader = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("loggedInAdmin");
    navigate("/admin/login");
  };

  const logoStyle = {
    fontSize: "60px",
    marginRight: "10px",
    marginBottom: "14px",
  };

  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
            to="/admin"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <FaGifts style={logoStyle} />
            <span class="fs-2">Matchless Gifts</span>
            <span style={{ fontSize: "1.5rem" ,marginLeft:'10px'}}> - Admin Portal</span>
          </Link>
          

          {localStorage.getItem("loggedInAdmin") === null ? (
            <></>
          ) : (
            <div style={{ marginLeft: "15px" }}>
              <button onClick={handleSignout}>Signout</button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default AdminHeader;
