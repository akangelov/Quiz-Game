import React from "react";
import UserContext from '../../utils/Context';
import styles from './UserProfile.module.css'

const UserProfile = props => {
   
    const value = React.useContext(UserContext);
    

        return (
            <>
            <div className = {styles.imageContainer}>
                <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_366/v1596370427/true.jpg" alt="true"/>
            </div>
            <div className = {styles.imageContainer}>
                <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_366/v1596371800/false1.jpg" alt=""/>
            </div>
            <div>
                <p>User: {value.user.username}</p>
                <p>Correct Answers: {value.user.score}</p>
                <p>Wrong Answers: {value.user.wrongAnswers}</p>
            </div>
            </>
        )
}


export default UserProfile;