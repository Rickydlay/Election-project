import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.siteName}>Election System</div>
        <ul className={styles.menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className={styles.hero}>
        <img src="/voting 2.jpg" alt="Election Hero" className={styles.heroImage} />
        <div className={styles.slogan}>Secure Voting, Transparent Results</div>
      </div>
    </header>
  );
};

export default Header;