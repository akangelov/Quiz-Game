import React from "react";
import UserContext from '../../utils/Context';
import styles from './UserProfile.module.css'

const UserProfile = props => {
   
    const value = React.useContext(UserContext);
    

        return (
            <>
            <div className = {styles.userContainer}>
                    <p className={styles.categoryItem}>User: {value.user.username}</p>   
            </div>
            <div className = {styles.container}>
                
                <div className = {styles.imageContainer}>
                    <p className={`${styles.categoryItem} ${styles.correct}`}>Correct Answers: {value.user.score}</p>
                    <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1596382490/true3.png" alt="correct"/>
                </div>
                <div className = {styles.imageContainer}>
                    <p className={`${styles.categoryItem} ${styles.wrong}`}>Wrong Answers: {value.user.wrongAnswers}</p>
                    <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_366/v1596371800/false1.jpg" alt="wrong"/>
                </div>  
            </div>
            </>
        )
}


export default UserProfile;