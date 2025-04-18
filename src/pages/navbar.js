import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Funktion för att stänga menyn när en länk klickas
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>BrandName</div>
      <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.active : ''}`}>
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        <Link to="/" onClick={closeMobileMenu}>About</Link>
        <Link to="/" onClick={closeMobileMenu}>Services</Link>
        <Link to="/" onClick={closeMobileMenu}>Contact</Link>
      </nav>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <span></span><span></span><span></span>
      </div>
    </header>
  );
};

export default Navbar;
