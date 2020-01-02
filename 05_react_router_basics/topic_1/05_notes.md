# Lesson 05 - Installing React Router and Declaring Routes


## Installation
- Type
```
npm install --save react-router-dom
```

## Setup
- import `BrowserRoute` and `Route` from `react-router-dom`
- Add `<Route>` component specifying which component to render at which path
- Add attribute `exact` to make sure the component of exact path gets loaded

    Example
    ```
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
    ```