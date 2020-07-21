import React from 'react'
import styles from './Question.module.css'
import { Link } from "react-router-dom";
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

const Question = ({ question, _id }) => {
  return (
    <>
      <p className={styles.categoryItem}>
        {question} 
        <Link to={`/question/${_id}`}>Answer</Link>
      </p>
      </>
  )
}

export default Question;