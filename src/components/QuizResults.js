import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import switchAction from '../actions/switch-question.js';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  switchAction: bindActionCreators(switchAction, dispatch)
});


class QuizResults extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    
    return (
      <div>
          <h1>Your result:</h1> 
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);