# Lesson 01 - Designing the Stopwatch


- Before designing, the first is to consider if this is an **application state** or **component state**
    - **component state** is local and a subset of application state, and only be updated and passed down to children via props
    - **application state** is global (like database), and can be accessed anywhere in the app


- the next is to create component

    ```
    import React, { Component } from 'react';

    class Stopwatch extends Component {
        render() {
            return (
                <div className="stopwatch">
                    <h2>Stopwatch</h2>
                    <span className="stopwatch-time">0</span>
                    <button>Start</button>
                    <button>Reset</button>
                </div>
            );
        }
    }


    export default Stopwatch;
    ```

- the next is to integrate component into `<Header/>`

    Header.js
    ```
    const Header = (props) => {
        return (
            <header>
                <Stats players={props.players}>
                <h1>{ props.title }</h1>
                <Stopwatch />
            </header>
        );
    }
    ```