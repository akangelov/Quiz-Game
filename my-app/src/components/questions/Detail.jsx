// import React from 'react';
// import Question from './Question';
// import postService from '../../services/postService';

// export default class Detail extends React.Component {
//   state = {
//     post: null
//   };

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     postService.loadCategory(id).then(question => {
//       this.setState({ question });
//     });
//   }

//   render() {
//     const { question } = this.state;
//     return question && <Question category={question.category} question={question.question} />
//   }
// }