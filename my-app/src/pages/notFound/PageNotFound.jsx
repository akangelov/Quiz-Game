import React from 'react';
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css"

const PageNotFound = () => {
    return (
        <>
        <div >
            <img className={styles.notFound} src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1596543370/notFound.jpg" alt="notFound"/>
        </div>
        <Link className={styles.link} to="/"> Home </Link>
        </>
    )
}

export default PageNotFound;