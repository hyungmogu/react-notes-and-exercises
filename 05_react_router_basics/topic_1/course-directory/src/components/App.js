import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';

const App = () => (
  <BrowserRouter>
      <div className="container">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
      </div>
  </BrowserRouter>
);

export default App;