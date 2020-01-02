# Lesson 01 - Navigating Between Routes

- `<Link>` component in React router is equivalent to `<a>` tag
- `<Link>` uses **to** as opposed to **href** to load components set at different urls

    Example

    Header.js
    ```
    import React from 'react';
    import {
    Link
    } from 'react-router-dom';

    const Header = () => (
    <header>
        <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        </ul>
    </header>
    );

    export default Header;
    ```