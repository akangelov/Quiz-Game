import React, { Fragment } from "react";
import styles from './QuestionsByCategory.module.css'
import Question from './QuestionsByCategoryForm';

class GetQuestionsByCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
    }

    componentDidMount() { this.getQuestions(this.props.match.params.id)} //vrushta id-to, koeto e biology, science etc.
      
    getQuestions = async (id) => {
        const response = await fetch(`http://localhost:9999/api/origami?category=${id}`)
        const questions = await response.json()
        this.setState({questions})
    }       

    render() {

        const { questions } = this.state;

        return <Fragment>
            {   questions ?           
                 <div className={styles.categoryContainer}>               
                 {questions.map((question) =>
                   <Question key={question._id} {...question}></Question>)}
               </div> : <div>Loading...</div>
            }
            </Fragment>
    }
}

export default GetQuestionsByCategory;