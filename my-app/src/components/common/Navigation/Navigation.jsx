import React from 'react'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
import UserContext from '../../../services/Context';
// import Link from '../link'

const Navigation = props => {
    // console.log(props)

    const value = React.useContext(UserContext);
    console.log(value)
  
    const {logout, isLogged, userId } = props;

    return (
        <nav className={styles.navigation}>
            <ul>
                {<Link className={styles.link} to="/about">About</Link>}
                {<Link className={styles.link} to="/rules">Rules</Link>}
                {value.loggedIn && <Link className={styles.link} to={`/userprofile/${userId}`}>Profile</Link>}
                {value.loggedIn && <Link className={styles.link} to="/">Questions</Link>}
                {value.loggedIn && <Link className={styles.link} to="/create">Add new question</Link>}
                {value.loggedIn && <Link className={styles.link} to="/all">Edit Questions</Link>}
                {value.loggedIn && <button className={styles.button} onClick={logout}>Logout</button>}
                {!value.loggedIn && <Link className={styles.link} to="/register">Register</Link>}
                {!value.loggedIn && <Link className={styles.link} to="/login">Login</Link>}
            </ul>
        </nav>
    )
 }

export default Navigation;