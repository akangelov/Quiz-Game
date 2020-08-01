import React from "react";
import styles from './Answer.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router-dom';
import UserContext from '../../../utils/Context';

const AnswerForm = (props) => {

    const value = React.useContext(UserContext);
    console.log(value.user.score)
 
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
            }, 4000) )
            // .then(value.user.score === 1 ?  : console.log("there")) 
           
        } else { toast("This answer is not correct :/ Please try again! :)") }
    }

    function playJoker(e) {     
        if (e.target.textContent === "Google") {
            window.open(`http://google.com/search?q=${props.question}`)
        } else { 
         
        }
    }

    return (
        <>
        <div className={styles.container}>
        <h3>Jokers</h3>
        <section className={styles.jokersContainer}>    
            <button onClick={(e) => { playJoker(e) }} className={styles.jokerItem}>50:50</button>
            <button onClick={(e) => { playJoker(e) }} className={styles.jokerItem}>Google</button>
        </section>

        <h3>{props.question}</h3>
        <section className={styles.answersContainer}>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerA}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerB}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerC}</button>
            <button onClick={(e) => { checkAnswer(e) }} className={styles.answerItem}>{props.answerD}</button>
        </section>
        </div>
            <ToastContainer />
        </>
    )
}

export default withRouter(AnswerForm);