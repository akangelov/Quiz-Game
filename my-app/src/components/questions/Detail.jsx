import React from 'react';
import Question from './Question';
import postService from '../../services/postService';

class Detail extends React.Component {
  state = {
    question: null
  };

  componentDidMount() {
    this.getQuestion(this.props.match.params.id2)
  }

  getQuestion = async (id2) => {
    const response = await fetch(`http://localhost:9999/api/origami?id=${id2}`)
    console.log(response)

    if(!response.ok) {
        console.log('not ok')
    //   this.props.history.push('/error')
    }   
    const question = await response.json()
    console.log(question)
    this.setState({
      question: question.question,
    //   posts: user.posts && user.posts.length
    })
  }

  render() {
    const { question } = this.state;
    // console.log(question)
    return (
    <p>{question}</p>
    )
    // return question && <Question category={question.category} question={question.question} />
  }
}

export default Detail;