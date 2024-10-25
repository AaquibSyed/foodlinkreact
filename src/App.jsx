import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import DonorDashboard from './components/DonorDashboard';
import RecipientDashboard from './components/RecipientDashboard';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path='/donor-dashboard' element={<PrivateRoute component={DonorDashboard}/>}/>
         <Route path='/recipient-dashboard' element={<PrivateRoute component={RecipientDashboard}/>}/>
      </Routes>
    </Router>
  )
}

export default App
