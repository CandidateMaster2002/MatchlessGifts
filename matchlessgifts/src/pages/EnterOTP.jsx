import React, { useState } from "react";
import "../styles.css/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const EnterOTP = () => {
  const [otp, setOtp] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const navigate = useNavigate();

  const handleContinue = () => {

if(new Date().getTime()-localStorage.getItem("timeStampOTP")>= 5 * 60 * 1000){
    alert("OTP expired.Try again");
    navigate("/forgot-password")
    return;
}

   if(otp!==localStorage.getItem("otp")){
    setShowErrorMessage(true);
    return;
   }

   navigate("/forgot-password/change-password");
  };

  return (
    <div>
      <div className="box">
        <h2>Verification required</h2>
        <p>
          To continue, complete this verification step. We've sent an OTP to
          your email. Please enter it below to complete verification.
        </p>
        <div>
          <label htmlFor="email">Enter OTP:</label>
          <input
            type="number"
            id="otp"
            name="otp"
            value={otp}
            style={{ maxWidth: "90%" }}
            onChange={handleOTPChange}
          />
        </div>

        {showErrorMessage ? (
          <ErrorMessage
          message="
Invalid OTP. Please check your code and try again"
        />
        ) : (
         <></>
        )}

        <div>
          <button class="btn btn-warning " onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
