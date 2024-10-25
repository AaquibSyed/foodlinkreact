import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function RecipientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Receiver Dashboard</h2>
      <p>
        Welcome to the Receiver Dashboard. Here, you will be able to see
        available food donations.
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default RecipientDashboard;
