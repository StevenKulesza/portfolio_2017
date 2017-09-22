import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Work from './containers/Work';
import Contact from './containers/Contact';

export default (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/work" component={Work}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
);
