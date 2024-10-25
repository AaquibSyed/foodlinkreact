import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authService from "../services/authService";

function LoginPage() {
  const { state } = useLocation();
  const [userType, setUserType] = useState(state?.userType || 'donor');
  const [Id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserType(state?.userType || 'donor');
  }, [state]);


  const handleLogin = async (e) => {
    const isAuthenticated = await authService.login(Id, password, userType);

    if (isAuthenticated) {
      navigate(`/${userType}-dashboard`);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>{userType === 'donor' ? 'Donor' : 'Recipient'} Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder={`${userType === 'donor' ? 'Donor' : 'Recipient'} ID`}
          value={Id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
}

export default LoginPage;
