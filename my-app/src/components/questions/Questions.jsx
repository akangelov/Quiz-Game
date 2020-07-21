import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
      // const id = this.props.match.params.id;
      // console.log(id)
        this.getQuestions()
      }

    render() {

        const { questions } = this.state;
        console.log(questions)
        return <Fragment>

              <Link to="/question/:id">Biology</Link>
          

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