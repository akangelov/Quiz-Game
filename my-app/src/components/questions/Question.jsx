import React from 'react'
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

const Question = ({ question, category }) => {
  return (
      <p>
        {question} {category}
      </p>
  )
}

export default Question;