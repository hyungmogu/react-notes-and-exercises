# Lesson 06 - Inline Rendering with <Route>

- here, instead of `component`, `render` prop is used
    - render allows the use of component as well as props that can be passed to child components

    Example

    App.js
    ```
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
            <Route path="/courses" render={() => <Courses title='Courses'/>}/>
        </div>
    </BrowserRouter>
    );

    export default App;
    ```
