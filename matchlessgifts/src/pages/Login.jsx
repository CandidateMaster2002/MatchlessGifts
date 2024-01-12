import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../services/axios";
import { Button, Modal } from "react-bootstrap";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import { FaGifts } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (localStorage.getItem("loggedInUser") !== null) navigate("/");
  }, []);

  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

  const handleEmailInput = (e) => {
    setLoginCred({ ...loginCred, email: e.target.value });
    console.log(loginCred);
  };

  const handlePasswordInput = (e) => {
    setLoginCred({ ...loginCred, password: e.target.value });
    console.log(loginCred);
  };

  const logoStyle = {
    fontSize: "60px",
    marginRight: "10px",
    marginBottom: "14px",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // if (!checkValidation()) return;
    const { email, password } = loginCred;

    axios
      .post("users/login", { email, password })
      .then((response) => {
        axios
          .get(`users/userbyemail/${email}`)
          .then((response) => {
            // Assuming the response.data contains the user entity
            // console.log(response.data)
            localStorage.setItem("loggedInUser", JSON.stringify(response.data));
            // console.log(localStorage.getItem('loggedInUser').userid)

            navigate("/");
          })
          .catch((error) => {
            alert("Can't find user");
          });
      })
      .catch((error) => {
        if (error.response.status === 404)
          alert("This email id is not registered");
        else if (error.response.status === 401)
          alert("Incorrect password entered");
        else alert("An error occurred during login. Please try again.");
      });
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="cardd" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <FaGifts style={logoStyle} />
                          <span class="h2 fw-bold mb-0">Matchless Gifts</span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="row">
                        <div className="col-md-12">
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="emailLogin">
      Email address
    </label>
    <input
      type="email"
      id="emailLogin"
      name="emailLogin"
      value={loginCred.email}
      onChange={handleEmailInput}
      className="form-control form-control-lg"
      style={{ backgroundColor: 'white' }}
    />
  </div>
</div>

<div className="col-md-12">
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="passwordLogin">
      Password
    </label>
    <input
      type="password"
      id="passwordLogin"
      name="passwordLogin"
      value={loginCred.password}
      onChange={handlePasswordInput}
      className="form-control form-control-lg"
      style={{ backgroundColor: 'white' }}
    />
  </div>
</div>

                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="submit"
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>

                        <div>

                          <Link to="/forgot-password">
                          Forgot password?
                          </Link>
                          {/* <a
                            class="text-muted"
                            style={{ cursor: "pointer" }}
                            onClick={handleShowModal}
                          >
                            Forgot password?
                          </a> */}
                         
                        </div>

                        <p class="mb-5 pb-lg-2" style={{ color: " #393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
