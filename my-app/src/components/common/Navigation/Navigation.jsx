import React from 'react'
// import Link from '../link'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
import userService from '../../../services/userService';
// import logo from '../../images/white-origami-bird.png'

class Navigation extends React.Component {

  logout = () => {
    userService.logout()
  }

  render() {

  return (
    
      <nav className={styles.navigation}>
      <ul>
      <Link className={styles.link} to="/about">About</Link>
      <Link className={styles.link} to="/rules">Rules</Link>
      <Link className={styles.link} to="/">Questions</Link>
      <Link className={styles.link} to="/userprofile">Profile</Link>
      <Link className={styles.link} to="/register">Register</Link>
      <Link className={styles.link} to="/login">Login</Link>
      <Link className={styles.link} to="/origamis">Origamis</Link>
      <button className={styles.link} onClick={this.logout}>Logout</button>
    </ul>
      </nav>
  )
}
}

export default Navigation;