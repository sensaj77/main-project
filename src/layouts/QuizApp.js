import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import switchAction from '../actions/switch-question.js';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  switchAction: bindActionCreators(switchAction, dispatch)
});

const examQuestions = [
  
  { 
    'questions' : ['What is 10 + 4?', '12', '14', '16', 'B' ]
  },
  {
    'questions': ['What is 22 + 4?', '22', '24', '26', 'C' ]
  },
  {
    'questions': ['Who is president of Poland?', 'Duda', 'Wales', 'Szydlo', 'A' ]
  },
  {
    'questions': ['What is highest mountain in Poland?', 'Rysy', 'Giewont', 'Kozi Wierch', 'A' ]
  }

]

class QuizApp extends React.Component {
  constructor(props) {
    super(props);
    this.switchQuestionHandler = this.switchQuestionHandler.bind(this);
  }
  switchQuestionHandler(  ) {
    console.log('this props are>>>>', JSON.stringify(this.props,null,  2));
    
    let myData = examQuestions;
   
    myData.splice(0,1);
    
    if(myData.length === 0) {
      alert('no more questions!');
      return;
    }
    this.props.switchAction.switchQuestion(myData);
  }
  render () {
    
    return (
      <div>
          <h1>{this.props[0].questions[0]}</h1>
          <input type='radio' name='choices' value='A' /> {this.props[0].questions[1]} <br />
          <input type='radio' name='choices' value='B' /> {this.props[0].questions[2]} <br />
          <input type='radio' name='choices' value='C' /> {this.props[0].questions[3]} <br />
         
          <button onClick={this.switchQuestionHandler}>Next question</button>
          <Link to='/results-view'>
            <button>Results</button>
          </Link>
          <Link to='/'>
            <button>Home</button>
          </Link>
          
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);

        
/*<button onclick="numbers.forEach(myFunction)">Try it</button>

<p>Updated array: <span id="demo"></span></p>

<script>
var numbers = [65, 44, 12, 4];

function myFunction(item,index,arr) {
    arr[index] = item * document.getElementById("multiplyWith").value;
    demo.innerHTML=numbers;
    }
</script>*/

/*let questionsJSX = [];
    for(let questionKey in this.props) {
        let questionDetails = this.props[questionKey];
        let currentQuestionJSX = (
            <div key={questionKey}>
                <h3>{questionDetails.questions[0]}</h3>
            </div>);
        questionsJSX.push(currentQuestionJSX);
    }*/

    //Ale tutaj najlepiej zrobic to w es6 i uzywajac reduxa

/*    React.createClass({ 
    getInitialState : function() {
       return { showMe : false };
    },
    onClick : function() {
       this.setState({ showMe : true} );
    },
    render : function() {
        if(this.state.showMe) { 
            return (<div> one div </div>);
        } else { 
            return (<a onClick={this.onClick}> press me </a>);
        } 
    }
})
*/

/*
https://www.toptal.com/react/managing-view-state-with-react
*/