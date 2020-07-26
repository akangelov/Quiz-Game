import React from 'react'
import styles from './Question.module.css'
// import { Link } from "react-router-dom";
import Link from '../common/Link/Link';
import { render } from 'react-dom';
import postService from '../../services/postService';
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

class EditQuestion extends React.Component {


getQuestion = async () => {
    const id = this.props._id 
    return fetch(`http://localhost:9999/api/origami/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include'
    })
} 

render() {
        return (
            <div className={styles.categoryItem}>
              <p>{this.props.question}</p> 
              <button>Edit</button>
              <button onClick={this.getQuestion}>Delete</button>
              <input id={this.props._id} name={this.props._id} type="hidden"/>
            </div>
        )
    }
}

export default EditQuestion;