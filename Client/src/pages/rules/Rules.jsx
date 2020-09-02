import React from "react";
import styles from "./Rules.module.css"

const Rules = () => {
    return (
        <>
        <div className={styles.rules}>
        <p className={styles.rulesParagraph}>Rules</p>
            <ul className={styles.lists}>
                <li><span>A player can choose a question from one of the four categories - Biology, History, Geography or Science</span></li>
                <li><span>Each correct answer earns one point</span></li>
                <li><span>A player wins the game if he gathers 5 points</span></li>
                <li><span>A game is lost by giving 3 wrong answers</span></li>
            </ul>
        
            <p className={styles.rulesParagraph}>Jokers</p>
            <ul className={styles.lists}>
                <li><span>Google Search</span></li>
                <li><span>50/50</span></li>
            </ul>
        </div> 
        </>   
    )
}

export default Rules;