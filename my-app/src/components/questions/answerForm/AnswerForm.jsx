import React from "react";
import Answers from "./Answers";
import Answers5050 from "./Answers5050";
import styles from './Answer.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import UserContext from '../../../utils/Context';

const AnswerForm = (props) => {

    const value = React.useContext(UserContext);
    // console.log(value.user)
    
    const [showResults, setShowResults] = React.useState(false)

    let isHidden = true;

    function playJoker(e) {     
        if (e.target.textContent === "Google") {
            window.open(`http://google.com/search?q=${props.question}`)
        } else if (e.target.textContent === "50:50") { 
            setShowResults(true)
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
            {!showResults
            ? <Answers {...props}></Answers>               
            : <Answers5050 {...props}></Answers5050>
            }
        </section>
        </div>
            <ToastContainer />
        </>
    )
}

export default AnswerForm;