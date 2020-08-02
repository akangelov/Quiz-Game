import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
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