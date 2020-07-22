import React from 'react'
import styles from './Question.module.css'
// import { Link } from "react-router-dom";
import Link from '../common/Link/Link';
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

const Question = ({ question, _id }) => {
  return (
      <div className={styles.categoryItem}>
        <p>{question}</p> 
        <Link to={`/question/${_id}`}>Click here to answer</Link>
      </div>
  )
}

export default Question;