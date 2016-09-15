import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import question from './reducers/question.js';
import QuizApp from './layouts/QuizApp.js';

let store = createStore(question);

render(
    <Provider store={store}>
        <QuizApp />
    </Provider>,
    document.getElementById('root-element')
);