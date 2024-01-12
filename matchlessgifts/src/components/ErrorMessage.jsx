import React from 'react';
import { IoMdAlert } from "react-icons/io";
import "../styles.css/ErrorMessage.css"

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <div className="icon"> <IoMdAlert /> </div>
      <div className="text">{message}</div>
    </div>
  );
};

export default ErrorMessage;
