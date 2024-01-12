import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import "../styles.css/ForgotPassword.css";
import axios from "../services/axios"

const ChangePassword = ({email}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
const navigate =useNavigate();
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  function validatePasswordStrength(password) {
    // Define password criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if password meets all criteria
    const isLengthValid = password.length >= minLength;
    const isUppercaseValid = hasUppercase;
    const isLowercaseValid = hasLowercase;
    const isNumberValid = hasNumber;
    const isSpecialCharValid = hasSpecialChar;

    // Return true if all criteria are met
    return (
        isLengthValid &&
        isUppercaseValid &&
        isLowercaseValid &&
        isNumberValid &&
        isSpecialCharValid
    );
}

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleContinue = () => {

    if(!validatePasswordStrength(newPassword))
    {
        alert("Password must be at least 8 characters, include uppercase and lowercase letters, a numeric digit, and a special character.")
        return;
    }
    if (newPassword !== confirmPassword) {
      setShowErrorMessage(true);
      return;
    }

    axios.post('users/change-password', {
        email:localStorage.getItem("emailToChangePassword"),
        password:newPassword
    })
    .then(response => {
        localStorage.removeItem("otp");
        localStorage.removeItem("emailToChangePassword")
        navigate("/login")
        console.log("Password changed successfully");
    })
    .catch(error => {
        alert("Error changing password.Check if user is registered or not")
    });


   
  };

  return (
    <div>
      <div className="box">
        <h2>Change Password</h2>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            style={{ maxWidth: "90%" }}
            onChange={handleNewPasswordChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            style={{ maxWidth: "90%" }}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        {showErrorMessage ? (
          <ErrorMessage
            message="Passwords do not match. Please try again."
          />
        ) : (
          <></>
        )}

        <div>
          <button className="btn btn-warning" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
