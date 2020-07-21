import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Category.module.css'

const Category = () => {

    return (
        <>
        <h2>Please choose a category</h2>
          <section className = {styles.categoryContainer}>
            <Link className={styles.categoryItem} to="/questions/biology">Biology</Link>
            <Link className={styles.categoryItem} to="/questions/geography">Geography</Link>
            <Link className={styles.categoryItem} to="/questions/history">History</Link>
            <Link className={styles.categoryItem} to="/questions/science">Science</Link>
          </section>
        </>  
    )
}

export default Category;