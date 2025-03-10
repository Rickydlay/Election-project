import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <h1>Election Verification</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/candidate/1">Candidate Overview</Link>
      <Link to="/about">About</Link>
      <Link to="/admin/login">Admin</Link>
    </nav>
  </header>
);

export default Header;
