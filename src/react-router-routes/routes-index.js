import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import QuizApp                   from 'layouts/QuizApp';
import QuizResults                  from 'layouts/QuizResults';

export default (
  <Route component={QuizApp} path='/'>
    <IndexRoute component={QuizApp} name='home' />
    <Route component={QuizResults}  path='/results-view' name='results-view' />
  </Route>
);
