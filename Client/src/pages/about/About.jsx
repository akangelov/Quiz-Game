import React from "react";
import styles from './About.module.css';

const About = () => {
    return (
        <>
        <div className={styles.about}>
            <p className="aboutP">Quiz game is an interactive game that checks your knowledge
                in History, Biology, Math or Science.</p>
            <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_460/v1596096430/quiz.jpg" alt="quiz"/>         
        </div>     
        </>
    )
};

export default About;