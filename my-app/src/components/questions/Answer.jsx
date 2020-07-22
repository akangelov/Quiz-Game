import React, { Fragment } from "react";
import styles from './Answer.module.css'


const Answer = (props) => {
    return(
        <>
        <h3>Jokers</h3>
        <section className={styles.jokersContainer}>    
            <div className={styles.jokerItem}>Call a friend</div>
            <div className={styles.jokerItem}>50:50</div>
            <div className={styles.jokerItem}>Google Search</div>
        </section>
        <h3>{props.question}</h3>
        <section className={styles.answersContainer}>
            <div className={styles.answerItem}>{props.answerA}</div>
            <div className={styles.answerItem}>{props.answerB}</div>
            <div className={styles.answerItem}>{props.answerC}</div>
            <div className={styles.answerItem}>{props.answerD}</div>
        </section>
        </>
    )

}

export default Answer;