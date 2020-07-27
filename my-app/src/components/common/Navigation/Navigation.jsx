import React from 'react'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
// import Link from '../link'

const Navigation = props => {
  
    const {logout, isLogged, userId } = props;

    return (
        <nav className={styles.navigation}>
            <ul>
                {<Link className={styles.link} to="/about">About</Link>}
                {<Link className={styles.link} to="/rules">Rules</Link>}
                {isLogged && <Link className={styles.link} to={`/userprofile/${userId}`}>Profile</Link>}
                {isLogged && <Link className={styles.link} to="/">Questions</Link>}
                {isLogged && <Link className={styles.link} to="/create">Add new question</Link>}
                {isLogged && <Link className={styles.link} to="/all">Edit Questions</Link>}
                {isLogged && <button className={styles.button} onClick={logout}>Logout</button>}
                {!isLogged && <Link className={styles.link} to="/register">Register</Link>}
                {!isLogged && <Link className={styles.link} to="/login">Login</Link>}
            </ul>
        </nav>
    )
 }

export default Navigation;