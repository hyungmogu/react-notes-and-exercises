# Lesson 06 - Using the Match Object

- match object containing parent URL and path is passed as prop to components via `<Route/>`
    - `match.url` is used in `<Link>` or `<NavLink>`
    - `match.prop` is used in `<Route>`

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

    const Courses = ({match}) => (
    <div className="main-content courses">
        <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
            <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
            <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
            <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        </ul>
        </div>

        <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`}/>}/>
        <Route path={`${match.path}/html`} render={ () => <HTML/>}/>
        <Route path={`${match.path}/css`} render={() => <CSS/>}/>
        <Route path={`${match.path}/javascript`} render={() => <JavaScript/>}/>
    </div>
    );

    export default Courses;
    ```