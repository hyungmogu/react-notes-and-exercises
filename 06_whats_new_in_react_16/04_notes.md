# Lesson 04 - New Return Types

## List of components
- React now allows a component to return list of components
    - this eliminates the need to wrap components in a container

    components/JSTeachers.js;
    ```
    import React from 'react';

    const JSTeachers = () => {
        return [
            <li key="1">Treasure</li>,
            <li key="2">Guil</li>,
            <li key="3">James</li>
        ];
    }
    ```

    components/Teachers.js
    ```
    import React from 'react';
    import JSTeachers from './JSTeachers';

    const Teachers = () =>
        <div className="teachers">
            <h1>Teacher List</h1>
            <ul>
                <JSTeachers/>
            </ul>
        </div>

    export default Teachers;
    ```


## String / Number
- React now allows the return of just a string without wrapping in a container / number
    - React doesn't need to be imported this case

    Example

    Header.js
    ```
    const Header = () => 'Hello from Header';
    export default Header;
    ```

    Footer.js
    ```
    const Footer = () => 2017 ;
    export default Footer;
    ```