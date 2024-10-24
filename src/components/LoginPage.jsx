import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function LoginPage() {
  const [donorId, setDonorId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.PreventDefault();
    const isAuthenticated = await authService.login(donorId, password);

    if (isAuthenticated) {
      navigate("/donor-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Donor ID"
          value={donorId}
          onChange={(e) => setDonorId(e.target.value)}
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
