import React, { Fragment } from "react";
import styles from './Questions.module.css'
import Link from '../common/Link/Link';
// import { Link } from "react-router-dom";
import postService from '../../services/postService';
import EditQuestion from './EditQuestion';

class AllQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
    }
      
    getQuestions = async () => {
      const response = await fetch('http://localhost:9999/api/origami')
      const questions = await response.json()
      this.setState({questions})  
    }  

    componentDidMount() { 
        this.getQuestions()
    }

    render() {

        const { questions } = this.state;

        return <Fragment>
               <h3>You can edit or delete a question below: </h3>
            {   questions ?           
                 <div className={styles.categoryContainer}>               
                 {questions.map((question) => 
                  <EditQuestion key={question._id} {...question}></EditQuestion>)}
               </div> : <div>Loading...</div>
            }
            </Fragment>
    }
}

export default AllQuestions;