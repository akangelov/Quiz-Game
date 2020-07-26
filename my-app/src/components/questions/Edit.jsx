import React, { Fragment } from "react";
import styles from './Questions.module.css'
import Link from '../common/Link/Link';
// import { Link } from "react-router-dom";
import postService from '../../services/postService';
import Question from './Question';


class EditQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
      }

    componentDidMount() { this.getQuestions()}
      
    getQuestions = async () => {
      const response = await fetch('http://localhost:9999/api/origami')
      const questions = await response.json()
      console.log(questions)
      this.setState({questions})  
    }  
    
    render() {

        const { questions } = this.state;
        console.log(questions)

        return <Fragment>
               <h3>Please select a question: </h3>
            {/* {   questions ?           
                 <div className={styles.categoryContainer}>               
                 {questions.map((question) =>
                   <Question key={question._id} {...question}></Question>)}
               </div> : <div>Loading...</div>
            } */}

            </Fragment>
    }

}

export default EditQuestion;