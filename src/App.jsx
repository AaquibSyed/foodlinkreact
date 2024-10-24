import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<LoginPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path='/donor-dashboard' element={<PrivateRoute component={DonorDashboard}/>}/>
         <Route path='/recipient-dashboard' element={<PrivateRoute component={RecipientDashboard}/>}/>
      </Routes>

    </Router>
  )
}

export default App
