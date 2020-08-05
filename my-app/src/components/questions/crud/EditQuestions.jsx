import React, {Fragment} from "react";
import styles from './CrudQuestion.module.css'
import EditDelQuestion from './EditQuestion';

class EditQuestions extends React.Component {
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
            <h3 className={styles.h3}>You can edit or delete a question below: </h3>
            {   questions ?           
                 <div className={styles.container}>               
                 {questions.map((question) => 
                  <EditDelQuestion key={question._id} {...question}></EditDelQuestion>)}
                </div> : <div>Loading...</div>
            }
            </Fragment>
    }
}

export default EditQuestions;