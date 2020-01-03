import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Header from './Header';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
      <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" render={ () => <Home/>}/>
            <Route path="/about" render={() => <About title='About'/>}/>
            <Route path="/teachers" render={() => <Teachers title='Teachers'/>}/>
            <Route path="/courses" component={Courses}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
  </BrowserRouter>
);

export default App;