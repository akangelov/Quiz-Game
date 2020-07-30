import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const HomePage = () => {

    return (
        <>
        <section className = {styles.categoryContainer}>
            <div className = {styles.imageContainer}>
                <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595758389/biology_yt6fju.jpg" alt="biology"/>
                <Link className={styles.categoryItem} to="/questions/biology">Biology</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595757954/history_ptn99s.jpg" alt="history"/>
                <Link className={styles.categoryItem} to="/questions/history">History</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595757954/geography_dbevsx.jpg" alt="geography"/>
                <Link className={styles.categoryItem} to="/questions/geography">Geography</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_750/v1595759504/science_i5fmz.jpg" alt="science" />
                <Link className={styles.categoryItem} to="/questions/science">Science</Link>
            </div>
            </section>
        </>    
    )
}

export default HomePage;