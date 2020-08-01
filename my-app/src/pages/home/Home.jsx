import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import UserContext from '../../utils/Context';

const HomePage = (props) => {

    const value = React.useContext(UserContext);
    
    React.useEffect(() => {
        if(value.user.score === 3) {
            toast("Congratulations!You won the game!Your score is reset!")
            const data = {score: -1}
            return fetch(`http://localhost:9999/api/user/${value.user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            }).then( setTimeout(() => {
                window.location.reload(false)
            }, 3000) )
        }
    });

    return (
        <>
        <section className = {styles.categoryContainer}>
            <div className = {styles.imageContainer}>
                <img className= {styles.Image} src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595758389/biology_yt6fju.jpg" alt="biology"/>
                <Link className={`${styles.categoryItem} ${styles.biology}`} to="/questions/biology">Biology</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595757954/history_ptn99s.jpg" alt="history"/>
                <Link className={`${styles.categoryItem} ${styles.history}`} to="/questions/history">History</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/v1595757954/geography_dbevsx.jpg" alt="geography"/>
                <Link className={`${styles.categoryItem} ${styles.geography}`} to="/questions/geography">Geography</Link>
            </div>
            <div className = {styles.imageContainer}>
                <img src ="https://res.cloudinary.com/dq336pwqs/image/upload/c_scale,w_750/v1595759504/science_i5fmz.jpg" alt="science" />
                <Link className={`${styles.categoryItem} ${styles.science}`} to="/questions/science">Science</Link>
            </div>
            </section>
            <ToastContainer />
        </>    
    )
}

export default HomePage;