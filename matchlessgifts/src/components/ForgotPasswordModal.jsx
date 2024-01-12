import React, { useState } from 'react';
import axios from "../services/axios";
const ForgotPasswordModal = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [validEmail,setValidEmail]=useState()


  const isValidEmail=async  (email) =>{

   await axios
    .get(`users/check-email?email=${email}`)
    .then(response => {
      setValidEmail(response.data)
    })
    .catch(error => {
      setValidEmail(false)
    //  return false;
    });
  }

  const handleGetOtp = async () => {
   await isValidEmail(email);
    console.log(validEmail);
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button type="button" onClick={handleGetOtp}>
          Get OTP
        </button>
      </div>

      {otpRequested && (
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordModal;
