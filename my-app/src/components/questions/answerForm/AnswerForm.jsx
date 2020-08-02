import React from "react";
import Answers from "./Answers";
import Answers5050 from "./Answers5050";
import styles from './Answer.module.css'

const AnswerForm = (props) => {

    const [hideAnswers, setHideAnswers] = React.useState(false)

    function playJoker(e) {     
        if (e.target.textContent === "Google") {
            window.open(`http://google.com/search?q=${props.question}`)
        } else if (e.target.textContent === "50:50") { 
            setHideAnswers(true)
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
                ? <Answers5050 {...props}></Answers5050>        
                : <Answers {...props}></Answers>   
            }
        </section>
        </div>
        </>
    )
}

export default AnswerForm;