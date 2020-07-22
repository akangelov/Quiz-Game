import React, { Fragment } from 'react';
import Answer from './Answer';
import Question from './Question';
import postService from '../../services/postService';

class Detail extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {category: null}
  }

  componentDidMount() { 
    this.getQuestions(this.props.match.params.id)
    // console.log(this.props.match.params.id)
  }

  getQuestions = async (id) => {
    const response = await fetch(`http://localhost:9999/api/origami?id=${id}`)
    const question = await response.json()
    // console.log(question)
    this.setState({question})
  }

  render() {
    const { question } = this.state;
    const data = {...question}
    console.log(data)
   
    return (
      // <p>Hello</p>
      <Answer {...data}/>
    )
    
    // return question && <Question category={question.category} question={question.question} />
  }
}

export default Detail;