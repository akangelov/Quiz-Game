import React from "react";
import styles from "./Rules.module.css"

const Rules = () => {
    return (
        <>
    <div className={styles.rules}>
        <p>The rules of the game are simple.</p>
        <p>A player can choose a question from the list or can be assigned a random question 
            by clicking Random Question button.
        </p>
        <p>
            Each question brings one point. A player wins if he gathers 5 points or loses if he has a total 
            of 3 wrong answers.
        </p>
        <p>There are 3 jockers that the player can use</p>
            <ul>
                <li>Call a friend</li>
                <li>Google Search</li>
                <li>50/50</li>
            </ul>
    </div> 
    </>   
    )
}

export default Rules;