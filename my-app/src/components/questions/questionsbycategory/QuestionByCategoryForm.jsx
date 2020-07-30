import React from 'react'
import styles from './QuestionByCategory.module.css'
import Link from '../../common/Link/Link';

const Question = ({ question, _id }) => {
    return (
        <div className={styles.categoryItem}>
          <p>{question}</p> 
          <Link to={`/question/${_id}`}>Click here to answer</Link>
        </div>
  )
}

export default Question;