import React, { Fragment } from "react";
import postService from '../../services/postService';
import Question from './Question';

class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
      }

    getQuestions = async () => {
     const questions = await postService.load();
     this.setState({questions})
    //  console.log(questions)
    }       

    componentDidMount() {
        this.getQuestions()
      }

    render() {

        const { questions } = this.state;
        console.log(questions)
        return <Fragment>
            {   questions ?
                 <div className="Posts">
                 {questions.map((question) =>
                   <Question key={question._id} {...question}></Question>)}
               </div> : <div>Loading...</div>
            }
            </Fragment>
    }

}

export default Questions;