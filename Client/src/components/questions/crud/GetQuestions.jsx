import React, {Fragment} from "react";
import styles from './CrudQuestion.module.css'
import EditQuestionForm from './DeleteQuestion';

class GetQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
    }
      
    getQuestions = async () => {
      const response = await fetch('https://quiz-game-new.herokuapp.com/api/question')
    //   const response = await fetch('http://localhost:9999/api/question')
      const questions = await response.json()
      this.setState({questions})  
    }  

    componentDidMount() { 
        this.getQuestions()
    }

    render() {

        const { questions } = this.state;

        return <Fragment>
            <h3 className={styles.h3}>N.B. A question can be editted/deleted only by its author. </h3>
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