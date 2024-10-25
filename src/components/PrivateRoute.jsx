import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const PrivateRoute = ({ component: Component }) => {
  return authService.isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
