import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('voter');
  const [nin, setNin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Mock API call (replace with real endpoint later)
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nin, password, role }),
    });
    const data = await res.json();
    if (data.success) {
      navigate(role === 'voter' ? '/vote' : '/admin-dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="voter">Voter</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />
        <label>
          NIN: <input value={nin} onChange={(e) => setNin(e.target.value)} required />
        </label>
        <br />
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;