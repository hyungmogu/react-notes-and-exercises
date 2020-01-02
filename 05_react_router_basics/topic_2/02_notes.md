# Lesson 02 - Styling Active Links

**Note: react project can be run by typing `npm start` in `course-directory`**

- `<NavLink>` is a special version of `<Link>` that will add styling attributes
    - allows the addition of css classes and styles to component
        - `activeStyle` for addition of styles
        - `activeClassName` for addition of class name


    ```
    import React from 'react';
    import {
    NavLink
    } from 'react-router-dom';

    const Header = () => (
    <header>
        <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
        <li><NavLink exact to="/" activeStyle={{'background-color': 'red'}}>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="actyMcActiveFace">About</NavLink></li>
        <li><NavLink to="/teachers">Teachers</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>
    </header>
    );

    export default Header;
    ```