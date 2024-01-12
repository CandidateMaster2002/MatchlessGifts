import React, { useState } from "react";
import "../styles.css/ForgotPassword.css"
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

 

  const navigate=useNavigate()

  const handleGetOTP = () => {
    const randomSixDigitOTP = Math.floor(100000 + Math.random() * 900000);



    axios.post('http://localhost:8080/email/send-email', {
        to:email,
        subject:`${randomSixDigitOTP} is your OTP to authenticate Matchless Gifts Account`,
        body:`${randomSixDigitOTP} is your One Time Password to authenticate Matchless Gifts Account.It is valid for 5 minutes only.Enter it to change your passowrd`
    })
    .then(response => {
        localStorage.setItem("otp",randomSixDigitOTP)
        localStorage.setItem("emailToChangePassword",email);
        localStorage.setItem("timeStampOTP",new Date().getTime())
        navigate("enter-otp")
    })
    .catch(error => {
        alert("error sending OTP to your mail")
    });



   


    console.log(`OTP request for email: ${email}`);
  };

  return (
    <div>
      <div className="box">
      <h2>Password Assistance</h2>
      <p>Enter the email address associated with your account.</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            style={{maxWidth:"90%"}}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <button class="btn btn-warning " onClick={handleGetOTP}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
