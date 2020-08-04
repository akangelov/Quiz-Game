import React from "react";
import styles from './Answer.module.css'

const Answers5050 = (props) => {

    const {checkAnswer} = props;

    const wrongAnswers = [];
    if (props.answerA !== props.correctAnswer) {
        wrongAnswers.push(props.answerA)
    }
    if (props.answerB !== props.correctAnswer) {
        wrongAnswers.push(props.answerB)
    }
    if (props.answerC !== props.correctAnswer) {
        wrongAnswers.push(props.answerC)
    }
    if (props.answerD !== props.correctAnswer) {
        wrongAnswers.push(props.answerD)
    }
        
    return (
        <>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.correctAnswer}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{wrongAnswers[0]}</button>
        </>   
    )
}

export default Answers5050;