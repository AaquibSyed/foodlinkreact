import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const DonorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Donor Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DonorDashboard;
