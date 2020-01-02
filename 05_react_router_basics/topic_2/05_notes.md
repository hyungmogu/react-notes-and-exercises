# Lesson 05 - Redirecting a Route

- `<Redirect to='/courses/html'/>` redirects to specific URL
    - has a problem!
    - when refreshed at subURL `/courses/javascript` it redirects back to `/courses/html`

    - solution is putting `<Redirect>` in `<Route/>`

    ```
    import React from 'react';
    import {
    NavLink,
    Route,
    Redirect
    } from 'react-router-dom';

    import HTML from './courses/HTML';
    import CSS from './courses/CSS';
    import JavaScript from './courses/JavaScript';

    const Courses = () => (
        ...

        {/* Write routes here... */}
        <Route exact path="/courses" render={ () => <Redirect to="/courses/html"/>}/>
        <Route path="/courses/html" render={ () => <HTML/>}/>
        <Route path="/courses/css" render={() => <CSS/>}/>
        <Route path="/courses/javascript" render={() => <JavaScript/>}/>
    </div>
    );

    export default Courses;
    ```

