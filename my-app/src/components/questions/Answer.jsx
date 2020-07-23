import React from "react";
import styles from './Answer.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = (props) => {
 
    function checkAnswer(e) {
        
        if (e.target.innerText === props.correctAnswer) {
            toast("Correct Answer!")
        } else {
            toast("This answer is not correct :/ Please try again! :)")
        }
    }

    return (
        <>
        <p>{props.correctAnswer}</p>
        <h3>Jokers</h3>
        <section className={styles.jokersContainer}>    
            <button className={styles.jokerItem}>50:50</button>
            <button className={styles.jokerItem}>Google</button>
        </section>

        <h3>{props.question}</h3>
        <section className={styles.answersContainer}>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerA}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerB}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerC}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerD}</button>
            <ToastContainer />
        </section>
        </>
    )
}

export default Answer;