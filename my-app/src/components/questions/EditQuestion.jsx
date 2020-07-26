import React from 'react'
import styles from './Question.module.css'
// import { Link } from "react-router-dom";
import Link from '../common/Link/Link';
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

const EditQuestion = ({ question, _id }) => {
  return (
      <div className={styles.categoryItem}>
        <p>{question}</p> 
        <Link to={`/question/${_id}`}>Edit</Link>
        <Link to={`/question/${_id}`}>Delete</Link>
      </div>
  )
}

export default EditQuestion;