import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';

export default (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/work" component={Work}/>
    </div>
  </Router>
);
