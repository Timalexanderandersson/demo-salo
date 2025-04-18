import React from 'react';
import styles from '../styles/homepage.module.css';
import videos from '../assets/newvideo.mp4';
import nybild from '../assets/nybild (1).webp';


const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop className={styles.video}>
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroContenttwo}>
            <div className={styles.heroText}>
              <h1>Skapa din perfekta stil – vi har erfarenheten och passionen!</h1>
              <p>Vi strävar efter att skapa en varm och inbjudande atmosfär där du kan slappna av och känna dig som hemma.</p>
            </div>
            <div className={styles.ctaContainer}>
              <h2>Våra Tjänster</h2>
              <div className={styles.ctaButtons}>
                <button>Boka tid</button>
                <button>Kontakta Oss</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Om oss</h2>
            <p>
  Välkommen till vår frisörsalong – en plats där stil möter passion. Vi brinner för att ge varje kund en unik
  upplevelse, oavsett om du kommer in för en snabb uppfräschning eller en total makeover. Vårt team av erfarna
  frisörer och stylister kombinerar kreativitet med teknisk expertis för att skapa resultat som inte bara ser bra
  ut – utan också känns rätt för dig. Här handlar det inte bara om hår, det handlar om självförtroende, om att hitta
  din stil, och att känna sig som sitt bästa jag.
</p>

          </div>
          <div className={styles.aboutImage}>
            <img src={nybild} alt="Frisörsalong" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
