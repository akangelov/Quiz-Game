import React from 'react'
// import Link from '../link'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
// import userService from '../../../services/userService';
// import logo from '../../images/white-origami-bird.png'

const Navigation = props => {

  // console.log(props)
  const {logout, isLogged, userId } = props;
  // console.log(props)

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