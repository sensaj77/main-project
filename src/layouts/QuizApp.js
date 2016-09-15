import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
});

class QuizApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let questionsJSX = [];
    for(let questionKey in this.props) {
        let questionDetails = this.props[questionKey];
        let currentQuestionJSX = (
            <div key={questionKey}>
                <h3>{questionDetails.questions[0]}</h3>
            </div>);
        questionsJSX.push(currentQuestionJSX);
    }
    return (
      <div>
          <h1>Quiz app</h1>
          {questionsJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);