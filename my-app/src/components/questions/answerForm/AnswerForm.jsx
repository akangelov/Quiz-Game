import React from "react";
import Answers from "./Answers";
import Answers5050 from "./Answers5050";
import styles from './Answer.module.css'
import userService from '../../../utils/userService';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import UserContext from '../../../utils/Context';

const AnswerForm = (props) => {

    const [hideAnswers, setHideAnswers] = React.useState(false)

    const value = React.useContext(UserContext);
    const userId = value.user.id

    function playJoker(e) {     
        if (e.target.textContent === "Google") {
            window.open(`http://google.com/search?q=${props.question}`)
        } else if (e.target.textContent === "50:50") { 
            setHideAnswers(true)
        }
    }

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
            .then(setTimeout(() => {
                props.history.push("/")
                window.location.reload(false)
            }, 3000) )
        
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
            { hideAnswers          
                ? <Answers5050 checkAnswer={checkAnswer}  {...props}></Answers5050>        
                : <Answers checkAnswer={checkAnswer} {...props}></Answers>   
            }
        </section>
        </div>
        </>
    )
}

export default withRouter(AnswerForm);