import React from "react";
import styles from './Answer.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = (props) => {

    function handleClick(e) {
        
        if (e.target.innerText === props.correctAnswer) {
            console.log("correct")
        } else {
            console.log("not correct")
        }
        // console.log(e.currentTarget.innerText);
        // console.log(this.props.correctAnswer);
    }

    function notify() {
        toast("Wow so easy !");
    } 

    return(
        <>
        <p>{props.correctAnswer}</p>
        <h3>Jokers</h3>
        <section className={styles.jokersContainer}>    
            <button className={styles.jokerItem}>Call a friend</button>
            <button className={styles.jokerItem}>50:50</button>
            <button className={styles.jokerItem}>Google Search</button>
        </section>
        <h3>{props.question}</h3>
        <section className={styles.answersContainer}>
            <button onClick={(e) => { handleClick(e); notify() }} className={styles.answerItem}>{props.answerA}</button>
            <button onClick={(e) => { handleClick(e); notify() }} className={styles.answerItem}>{props.answerB}</button>
            <button onClick={(e) => { handleClick(e); notify() }} className={styles.answerItem}>{props.answerC}</button>
            <button onClick={(e) => { handleClick(e); notify() }} className={styles.answerItem}>{props.answerD}</button>
            <ToastContainer />
        </section>
        </>
    )
}

export default Answer;