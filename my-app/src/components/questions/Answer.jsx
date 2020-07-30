import React from 'react';
import AnswerForm from './AnswerForm';
import UserContext from '../../utils/services/Context';

class Answer extends React.Component {
  
constructor(props) {
    super(props)
    this.state = {category: null}
}

    static contextType = UserContext;
  
componentDidMount() { 
    this.getQuestions(this.props.match.params.id)
}

getQuestions = async (id) => {
    const response = await fetch(`http://localhost:9999/api/origami?id=${id}`)
    const question = await response.json()
    this.setState({question})
}
render() {
    const { question } = this.state;
    return (
      <AnswerForm {...question}/>
    )
}
}

export default Answer;