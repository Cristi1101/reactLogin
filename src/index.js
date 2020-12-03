import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import UserHome from './components/UserHome';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/home'>
          <UserHome />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
