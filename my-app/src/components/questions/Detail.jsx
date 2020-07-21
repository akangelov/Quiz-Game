import React from 'react';
import Question from './Question';
import postService from '../../services/postService';

class Detail extends React.Component {
  state = {
    question: null
  };

  componentDidMount() {
    // const id = this.props.match.params.id;
    postService.loadCategory().then(question => {
        console.log(question)
      this.setState({ question });
    });
  }

  render() {
    const { question } = this.state;
    // console.log(question)
    return (
        <p>Hello</p>
    )
    // return question && <Question category={question.category} question={question.question} />
  }
}

export default Detail;