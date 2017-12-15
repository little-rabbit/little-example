import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,Redirect,hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import Roots from './client/roots';
import Home from './components/home';
Route.propTypes = {
  path:PropTypes.string,
  component:PropTypes.func.isRequired
};
IndexRoute.propTypes = {
  component:PropTypes.func.isRequired
};
Router.propTypes = {
  history:PropTypes.object
};
Provider.propTypes = {
  store:PropTypes.object.isRequired
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
         <Route path='/' component={Roots}>
            <IndexRoute component={Home}/>
         </Route>
    </Router>

  </Provider> ,document.getElementById('root')
);
