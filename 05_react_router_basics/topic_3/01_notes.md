# Lesson 01 - Displaying 404 Error Routes using Switch

- `<Switch/>` returns the Route of first matching URL
     - if none found, it returns the route at very bottom without path if exists
        - this can be used to create 404 page :)! Yaay!

        Example
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

        const App = () => (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path="/" render={ () => <Home/>}/>
                    <Route path="/about" render={() => <About title='About'/>}/>
                    <Route path="/teachers" render={() => <Teachers title='Teachers'/>}/>
                    <Route path="/courses" component={Courses}/>
                    <Route component={NotFound}/> // this guy here!!
                </Switch>
            </div>
        </BrowserRouter>
        );

        export default App;
        ```

        <div style="text-align: center;">
            <img src="https://user-images.githubusercontent.com/6856382/71701808-1be54080-2d89-11ea-8809-5e9e4a3dd177.png">
        </div>
