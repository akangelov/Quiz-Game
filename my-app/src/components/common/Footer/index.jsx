import React from "react";
import styles from './index.module.css';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <section>
        <div>
          <p>Quiz Game</p>
        </div>
      </section>
      <section className={styles.author}>
        <p>&copy; 2020 Angel Angelov</p>
      </section>
    </footer>
  );
};

export default Footer;