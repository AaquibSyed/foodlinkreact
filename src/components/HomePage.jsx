import React from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    navigate("/login", { state: { userType } });
  };

  return (
    <div className="home-page">
      <h1 className="selectHeading">Select Your Role</h1>
      <div className="icon-container">
        <div className="role-icon donor" onClick={() => handleUserTypeSelection("donor")}>
          <h3>Donor</h3>
        </div>
        <div className="role-icon recipient" onClick={() => handleUserTypeSelection("recipient")}>
          <h3>Recipient</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
