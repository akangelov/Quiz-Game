import React from 'react';
import AnswerForm from './AnswerForm';
import UserContext from '../../../utils/Context';

class GetQuestion extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {category: null}
    }

    static contextType = UserContext;
  
    getQuestions = async (id) => {
        // const response = await fetch(`https://quiz-game-new.herokuapp.com/api/question?id=${id}`)
        const response = await fetch(`http://localhost:9999/api/question?id=${id}`)
        const question = await response.json()
        this.setState({question})
    }

    componentDidMount() { 
        this.getQuestions(this.props.match.params.id)
    }

    render() {
        const { question } = this.state;
        return (
          <AnswerForm {...question}/>
        )
    }
}

export default GetQuestion;