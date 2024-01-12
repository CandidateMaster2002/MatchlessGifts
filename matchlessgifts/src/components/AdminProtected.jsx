import React, { useEffect } from "react";
import { useAccordionButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ Component }) => {

    const navigate=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('loggedInAdmin')===null)
        navigate("/admin/login")
    })
  return (
    <div>
      <Component />
    </div>
  );
};

export default AdminProtected;
