import React from 'react'
import styles from './CrudQuestion.module.css'
import EditQuestionForm from './EditQuestionForm';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import postService from '../../../utils/postService';

class EditDelQuestion extends React.Component {

deleteQuestion = async () => {
    const id = this.props._id 
    alert("Are you sure you want to delete this question?")
    postService.delete(id)
    .then(() => {
        setTimeout(() => {
            window.location.reload(false)
        }, 4000) 
        this.props.history.push('/all')
        toast("Question deleted!")
    })
} 

render() {
        return (
            <>
            <div >
                <div>
                    <p className={styles.question}>{this.props.question}</p>
                    <EditQuestionForm {...this.props}></EditQuestionForm>
                    <button className={`${styles.button} ${styles.buttonDelete}`} onClick={this.deleteQuestion}>Delete</button>
                </div> 
            </div> 
            <ToastContainer /> 
            </>
        )
    }
}

export default withRouter(EditDelQuestion);