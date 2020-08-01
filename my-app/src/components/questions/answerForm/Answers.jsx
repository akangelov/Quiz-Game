import React from "react";
import styles from './Answer.module.css'
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../../../utils/Context';


const Answers = (props) => {

    const value = React.useContext(UserContext);
        
    function checkAnswer(e) {     
        if (e.target.innerText === props.correctAnswer) {          
            const data = {score: value.user.score}
            
            return fetch(`http://localhost:9999/api/user/${value.user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
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
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerA}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerB}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerC}</button>
        <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerD}</button>
        </>   
    )
}

export default Answers;