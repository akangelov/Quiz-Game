import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Category.module.css'

const Category = () => {

    return (
        <>
        <h2>Please choose a category</h2>
          <section className = {styles.categoryContainer}>
            <Link className={styles.categoryItem} to="/questions">Biology</Link>
            <Link className={styles.categoryItem} to="/questions">Geography</Link>
            <Link className={styles.categoryItem} to="/questions">History</Link>
            <Link className={styles.categoryItem} to="/questions">Science</Link>
          </section>
        </>  
    )
}

export default Category;