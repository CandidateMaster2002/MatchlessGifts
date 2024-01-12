import React, { useEffect } from "react";
import { useAccordionButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserProtected = ({ Component }) => {

    const navigate=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('loggedInUser')===null)
        navigate("/login")
    })
  return (
    <div>
      <Component />
    </div>
  );
};

export default UserProtected;
