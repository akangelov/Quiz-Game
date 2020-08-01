import React from "react";
import AnswerFrom from "./AnswerForm";
import styles from './Answer.module.css'
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import UserContext from '../../../utils/Context';


const Answers5050 = (props) => {

    const value = React.useContext(UserContext);

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
        
    function checkAnswer(e) {     
        if (e.target.innerText === props.correctAnswer) {          
            const data = {score: value.user.score, wrongAnswers: value.user.wrongAnswers}
            
            return fetch(`http://localhost:9999/api/user/${value.user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
            .then(toast("Correct Answer!You earned 1 point!Please choose another question!"))
            .then( setTimeout(() => {
                props.history.push("/")
                window.location.reload(false)
            }, 3000) )
           
        } else { toast("This answer is not correct :/ Please try again! :)") }
    }

    return (
        <>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.correctAnswer}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{wrongAnswers[0]}</button>
        </>   
    )
}

export default withRouter(Answers5050);