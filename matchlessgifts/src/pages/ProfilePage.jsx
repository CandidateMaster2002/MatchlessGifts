import React, { useEffect, useState } from "react";
import "../styles.css/ProfilePage.css";
import { getUserById } from "../utils/getUserById";
import axios from "../services/axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import EditProfileModal from "../components/EditProfileModal";
const ProfilePage = ({ userid }) => {
  const [user, setUser] = useState();

  const [userId,setUserId]=useState(JSON.parse(localStorage.getItem("loggedInUser"))?.userid)

  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const getUserById = () => {
    axios
      .get(`/users/getbyid/${userId}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        navigate("/");
      });
  };

  const handleEditProfileClick = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("loggedInUser"))?.userid)
    getUserById();
  }, [localStorage.getItem("loggedInUser")]);

  const containerStyle = {
    width: "200px",
    height: "100px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    padding: "20px",
  };

  return (
    <section
      className="container py-5"
      style={{
        backgroundColor: "#eee",
        border: "2px solid #e0e0e0",
        borderRadius: "10px",
      }}
    >
      {user ? (
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">{user && user.name}</h5>
                <p className="text-muted mb-4">
                  {user && user.address && user.address.city},
                  {user && user.address && user.address.state}
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEditProfileClick}
                  >
                    <FaPencilAlt className="me-2" />
                    Edit Profile
                  </button>
                </div>

                {user && (
                  <EditProfileModal
                    show={showEditModal}
                    onHide={handleEditModalClose}
                    user={user}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user && user.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user && user.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user && user.mobileno}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    {user && user.address && (
                      <div className="address-table">
                        <div className="address-row">
                          <div className="address-label">Street:</div>
                          <div className="address-value">
                            {user.address.street}
                          </div>
                        </div>
                        <div className="address-row">
                          <div className="address-label">City:</div>
                          <div className="address-value">
                            {user.address.city}
                          </div>
                        </div>
                        <div className="address-row">
                          <div className="address-label">State:</div>
                          <div className="address-value">
                            {user.address.state}
                          </div>
                        </div>
                        <div className="address-row">
                          <div className="address-label">Pincode:</div>
                          <div className="address-value">
                            {user.address.pincode}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default ProfilePage;
