import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import postService from '../../services/postService';
import Question from './Question';


class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { questions: [] }
      }

    componentDidMount() {

        this.getQuestions(this.props.match.params.id)
      }

    getQuestions = async (id) => {
      const response = await fetch(`http://localhost:9999/api/origami?category=${id}`)
      const questions = await response.json()
      this.setState({questions})
    }       

    render() {

        const { questions } = this.state;
        
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