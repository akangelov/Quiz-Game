import React from "react";
import styles from './Answer.module.css'

const Answers = (props) => {

    const {checkAnswer} = props;

    return (
        <>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerA}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerB}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerC}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerD}</button>
        </>   
    )
}

export default Answers;