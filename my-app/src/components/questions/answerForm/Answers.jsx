import React from "react";
import styles from './Answer.module.css'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../../../utils/Context';
import userService from '../../../utils/userService';

const Answers = (props) => {

    const value = React.useContext(UserContext);
    const userId = value.user.id

    function checkAnswer(e) {     
        if (e.target.innerText === props.correctAnswer) {          
            const data = {score: value.user.score + 1, wrongAnswers: value.user.wrongAnswers}
           
            userService.put(data, userId)
            .then(toast("Correct Answer!You earned 1 point!Please choose another question!"))
            .then( setTimeout(() => {
                props.history.push("/")
                window.location.reload(false)
            }, 3000) )
           
        } else { 
            const data = {score: value.user.score, wrongAnswers: value.user.wrongAnswers + 1}

            userService.put(data, userId)
            .then(toast("This answer is not correct :/ Please try again! :)"))
            .then( setTimeout(() => {
                // props.history.push("/")
                window.location.reload(false)
            }, 3000) )
        
        }
    }

    return (
        <>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerA}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerB}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerC}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerD}</button>
        </>   
    )
}

export default withRouter(Answers);