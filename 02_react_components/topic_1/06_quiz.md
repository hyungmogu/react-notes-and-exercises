# Lesson 06 - Quiz

1. To use a global package that's not installed on your computer, you can use ____ to download and execute the package you specify, all in one command.

    - A) [ ]: --global
    - B) [ ]: npx
    - C) [ ]: npm
    - D) [ ]: --save

    **Answer:** B

2. Use a named import that imports React and Component from the react package.

    ```
    import 1._______ from 'react';

    class Nav extends Component {
    ...
    }

    ```

    **Answer:** React, {Component}


3. Complete the code to bring in React as a dependency.

    ```
    1._____ React 2._____ 'react';

    ```

    **Answer:** import, from

4. Complete the code to export the Application component.

    ```
    1._____ 2.______ Application;
    ```

    **Answer:** export, default

5. Do we need to import React into every module that uses React's API and JSX?

    - A) [ ]: No. Import React into the top-level module, and you're all set.
    - B) [ ]: Yes. Each module has its own scope.

    **Answer:** B

6. Use a relative path to import the nav displayed in the footer.

    ```
    import React from 'react';
    import 1._____ from '2.______';

    class Footer extends React.Component {
    render() {
        return (
        <footer>
            <h1>The Footer</h1>
            <Nav />
        </footer>
        );
    }
    }
    ```

    **Answer:** Nav, ./Nav
