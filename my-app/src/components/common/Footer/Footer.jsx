import React from "react";
import styles from './Footer.module.css';

const Footer = () => {

    const path = window.location.pathname;

    return (
        <footer className={path==="/all" ? styles.footer : styles.footerFixed}>
            <section>
                <div>
                    <p className={styles.quizgame}>Quiz Game</p>
                </div>
            </section>
            <section className={styles.author}>
                <p>&copy; 2020 Angel Angelov</p>
            </section>
        </footer>
  );
};

export default Footer;