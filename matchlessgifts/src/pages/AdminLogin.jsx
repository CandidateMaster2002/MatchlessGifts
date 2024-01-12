import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../services/axios";

const AdminLogin = () => {

    useEffect(()=>{
    if(localStorage.getItem('loggedInAdmin')!==null)
    navigate("/admin")
  },[])

    useEffect(() => {


        axios.get('admin/credentials')
          .then(response => {
            const loginDTO = response.data;
    
            setCorrectAdminLoginCred({
              correctEmail: loginDTO.email,
              correctPassword: loginDTO.password,
            });
          })
          .catch(error => {
            console.error('Error fetching login credentials:', error);
          });
      }, []);


    const navigate=useNavigate();

  const [adminLoginCred, setAdminLoginCred] = useState({
    email: "",
    password: "",
  });

  const [correctAdminLoginCred, setCorrectAdminLoginCred] = useState({
    correctEmail: "",
    correctPassword: "",
  });



  const handleEmailInput = (e) => {
    setAdminLoginCred({ ...adminLoginCred, email: e.target.value });
    //console.log(adminLoginCred);
  };

  const handlePasswordInput = (e) => {
    setAdminLoginCred({ ...adminLoginCred, password: e.target.value });
    // console.log(adminLoginCred);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = adminLoginCred;
    const {correctEmail,correctPassword}=correctAdminLoginCred;

    console.log(correctAdminLoginCred)


    if (email === correctEmail && password === correctPassword) {
      {
        localStorage.setItem("loggedInAdmin", JSON.stringify(adminLoginCred));

        navigate("/admin");
      }
    } else if (email === correctEmail && password !== correctPassword) {
      // Correct email but incorrect password
      alert("Incorrect password");
    } else if (email !== correctEmail) {
      // Incorrect email
      alert("Incorrect email");
    }
  };




  return (
    <form>
      <h2 style={{ marginBottom: "40px" }}>Login</h2>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="emailLogin"
          name="emailLogin"
          value={adminLoginCred.email}
          onChange={handleEmailInput}
          class="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="emailLogin">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="passwordLogin"
          name="passwordLogin"
          value={adminLoginCred.password}
          onChange={handlePasswordInput}
          className="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="passwordLogin">
          Password
        </label>
      </div>

      <div className="row mb-4">
        <div className="col">
          <a href="#!">Forgot password? </a>
        </div>
      </div>

      <button
        type="submit"
        onClick={handleLogin}
        className="btn btn-primary btn-block mb-4"
      >
        Log in
      </button>
    </form>
  );
};

export default AdminLogin;
