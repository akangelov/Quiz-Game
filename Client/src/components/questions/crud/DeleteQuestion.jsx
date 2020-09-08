import React from 'react'
import styles from './CrudQuestion.module.css'
import EditQuestionForm from './EditQuestionForm';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import postService from '../../../utils/postService';
import UserContext from '../../../utils/Context';

class DeleteQuestion extends React.Component {

    static contextType = UserContext;

    deleteQuestion = async () => {
        const id = this.props._id 
        console.log(this.context)
        alert("Are you sure you want to delete this question?")
        postService.delete(id)
        .then(() => {
            setTimeout(() => {
                window.location.reload(false)
            }, 4000) 
            this.props.history.push('/edit')
            toast("Question deleted!")
        })
    } 

    render() {
        const loggedUserId =  this.context.user.id;
        const questionAuthorId = this.props.author;
        const author = (loggedUserId === questionAuthorId)
        // console.log(author)

            return (
                <>
                <div >
                    <div>
                        
                        <EditQuestionForm {...this.props}></EditQuestionForm>
                       {
                            author
                            ? <button className={`${styles.button} ${styles.buttonDelete}`} onClick={this.deleteQuestion}>Delete</button>
                            : <p className={styles.p}></p>
                        }
                        </div> 
                </div> 
                <ToastContainer /> 
                </>
            )
        }
    }

export default withRouter(DeleteQuestion);