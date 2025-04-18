import React, { useState } from 'react';
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
        <a href="#" onClick={closeMobileMenu}>Hem</a>
        <a href="#" onClick={closeMobileMenu}>Galleri</a>
        <a href="#" onClick={closeMobileMenu}>Om oss</a>
        <a href="#" onClick={closeMobileMenu}>Kontakt</a>
      </nav>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <span></span><span></span><span></span>
      </div>
    </header>
  );
}

export default Navbar;
