# Lesson 03 - Using URL Parameters

- this lecture goes over how to pass dynamic url like `/teachers/alexa` to Route and show in component

    - its done by using `:<VAR_NAME>`
        - `<VAR_NAME>` and its value is passed to props in `match.params`

    Example

    App.js
    ```
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
    import Featured from './Featured';

    const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/" render={ () => <Home/>}/>
                <Route path="/about" render={() => <About title='About'/>}/>
                <Route exact path="/teachers" render={() => <Teachers title='Teachers'/>}/>
                <Route path="/teachers/:name/:topic" component={Featured}/> // like this here
                <Route path="/courses" component={Courses}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
    );

    export default App;
    ```

    components/Featured.js
    ```
    import React from 'react';

    const Featured = ({match}) => {
    let name = match.params.name; // :name accessed here
    let topic = match.params.topic; // :topic accessed here
    return (
        <div className="main-content">
        <h2>{name}</h2>
        <p>Introducing <strong></strong>, a teacher who loves teaching courses about {topic}<strong></strong>!</p>
        </div>
    );
    }

    export default Featured;
    ```