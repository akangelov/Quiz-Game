import React from 'react'
// import Link from '../link'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
import userService from '../../../services/userService';
// import logo from '../../images/white-origami-bird.png'

const Navigation = props => {

  const {logout, isLogged } = props;
  console.log(props)

  return (
    
      <nav className={styles.navigation}>
      <ul>
      {isLogged && (<Link className={styles.link} to="/about">About</Link>)}
      {isLogged && <Link className={styles.link} to="/rules">Rules</Link>}
      {isLogged && <Link className={styles.link} to="/">Questions</Link>}
      {isLogged && <Link className={styles.link} to="/userprofile">Profile</Link>}
      {!isLogged && <Link className={styles.link} to="/register">Register</Link>}
      {!isLogged && <Link className={styles.link} to="/login">Login</Link>}
      <Link className={styles.link} to="/origamis">Origamis</Link>
      {/* {this.props.isLogged && <Link className={styles.link} to="/logout">Logout</Link>} */}
      {isLogged && <button className={styles.link} onClick={logout}>Logout</button>}
    </ul>
      </nav>
  )
 }


export default Navigation;