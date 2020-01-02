import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Header from './Header';

const App = () => (
  <BrowserRouter>
      <div className="container">
          <Header/>
          <Route exact path="/" render={ () => <Home/>}/>
          <Route path="/about" render={() => <About title='About'/>}/>
          <Route path="/teachers" render={() => <Teachers title='Teachers'/>}/>
          <Route path="/courses" component={Courses}/>
      </div>
  </BrowserRouter>
);

export default App;