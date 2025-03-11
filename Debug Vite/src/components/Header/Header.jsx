import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="global-header">
      <h1>Election Project</h1>
      <nav className="global-nav">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/admin-dashboard">Admin Dashboard</a>
        <a href="/candidate-overview">Candidate Overview</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;
