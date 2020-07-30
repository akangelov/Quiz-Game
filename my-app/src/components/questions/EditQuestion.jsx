import React from 'react'
import styles from './Question.module.css'
import EditQuestionForm from './EditQuestionForm';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import Link from '../common/Link/Link';
// import postService from '../../services/postService';
// import styles from './index.module.css'
// import image from '../../images/blue-origami-bird.png'

class EditQuestion extends React.Component {

deleteQuestion = async () => {
    const id = this.props._id 
    alert("Are you sure you want to delete this question?")
    return fetch(`http://localhost:9999/api/origami/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include'
    }).then(toast("Question deleted!"))
        .then(this.props.history.push('/'))
} 

render() {
        return (
            <>
            <div className={styles.categoryItem}>
              <p>{this.props.question}</p> 
              <EditQuestionForm {...this.props}></EditQuestionForm>
              <button onClick={this.deleteQuestion}>Delete</button>
            </div>
            <ToastContainer /> 
            </>
        )
    }
}

export default withRouter(EditQuestion);