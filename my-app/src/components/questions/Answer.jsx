import React from "react";
import styles from './Answer.module.css'

class Answer extends React.Component {

    render() {

    return(
        <>
        <h3>Jokers</h3>
        <section className={styles.jokersContainer}>    
            <button className={styles.jokerItem}>Call a friend</button>
            <button className={styles.jokerItem}>50:50</button>
            <button className={styles.jokerItem}>Google Search</button>
        </section>
        <h3>{this.props.question}</h3>
        <section className={styles.answersContainer}>
            <button className={styles.answerItem}>{this.props.answerA}</button>
            <button className={styles.answerItem}>{this.props.answerB}</button>
            <button className={styles.answerItem}>{this.props.answerC}</button>
            <button className={styles.answerItem}>{this.props.answerD}</button>
        </section>
        </>
    )
    }
}

export default Answer;