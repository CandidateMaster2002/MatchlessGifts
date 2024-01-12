import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../services/axios";
import { FaGifts } from "react-icons/fa6";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const logoStyle = {
    fontSize: "60px",
 
  };
  const navigate = useNavigate();

  const checkValidation = () => {
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(user.name.trim())) {
      alert("Please enter a valid name containing only letters and spaces.");
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email.trim())) {
      // Valid email address
      alert("Please enter a valid email");
      return false;
    }

    const minLength = 6;
    if (user.password.trim().length < minLength) {
      alert("Password must be at least " + minLength + " characters.");
      return false;
    }

    if (user.confirm_password.trim() !== user.password.trim()) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!checkValidation()) return;
    const { name, email, password } = user;

    axios
      .post("users/signup", { name, email, password })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 409)
          alert("This email already registered");
        else alert("An error occurred during signup. Please try again.");
      });
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                 
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>

                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="name">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              class="form-control bg-white"
                              name="name"
                              value={user.name}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              class="form-control bg-white"
                              name="email"
                              value={user.email}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              class="form-control bg-white"
                              name="password"
                              value={user.password}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="confirn_password">
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="confirm_password"
                              name="confirm_password"
                              class="form-control bg-white"
                              value={user.confirm_password}
                              onChange={handleInputs}
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg"
                            onClick={handleSignup}
                          >
                            Register
                          </button>
                        </div>
                      </form>

                      <div>
                        {" "}
                        <p class="fw-bold mt-2 pt-1 mb-0">
                          Already have an account?{" "}
                          <Link to="/login" class="link-danger">
                            Sign in
                          </Link>
                        </p>
                      </div>

                      {/* <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"

style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
               >Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div> */}
                    </div>

                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      /> */}
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

export default Signup;
