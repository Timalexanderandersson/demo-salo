import React from 'react';
import styles from '../styles/footer.module.css'; // Justera sökvägen vid behov

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4><i className="fas fa-phone-alt"></i> Kontakt</h4>
          <p> Telefon: 070-123 45 67</p>
          <p> Email: info@salong.se</p>
        </div>
        <div className={styles.footerSection}>
          <h4><i className="fab fa-instagram"></i> Sociala Medier</h4>
          <p><i className="fab fa-facebook"></i> Facebook</p>
          <p><i className="fab fa-instagram"></i> Instagram</p>
        </div>
        <div className={styles.footerSection}>
          <h4><i className="fas fa-clock"></i> Öppettider</h4>
          <p>Mån–Fre: 10:00–18:00</p>
          <p> Lör: 10:00–14:00</p>
        </div>
      </div>
      <hr className={styles.footerLine} />
      <p className={styles.copyRight}>© 2025 Salong AB. Alla rättigheter förbehållna.</p>
    </footer>
  );
};

export default Footer;
