import React, {Fragment} from "react";
import styles from './CrudQuestion.module.css'
import EditQuestionForm from './DeleteQuestion';

class GetQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
    }
      
    getQuestions = async () => {
      const response = await fetch('https://obscure-stream-49000.herokuapp.com/api/question')
      const questions = await response.json()
      this.setState({questions})  
    }  

    componentDidMount() { 
        this.getQuestions()
    }

    render() {

        const { questions } = this.state;

        return <Fragment>
            <h3 className={styles.h3}>You can edit or delete a question below: </h3>
            {   questions ?           
                 <div className={styles.container}>               
                 {questions.map((question) => 
                  <EditQuestionForm key={question._id} {...question}></EditQuestionForm>)}
                </div> : <div>Loading...</div>
            }
            </Fragment>
    }
}

export default GetQuestions;