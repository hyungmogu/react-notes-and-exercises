# Lesson 05 - Render Children into Other Dom Nodes with Portals

- portals are useful when creating modals
- has syntax of

    ```
    ReactDOM.createPortal(
        Element,
        Target parent element
    )
    ```

    Example

    index.html
    ```
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        <title>Front End Course Directory</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
        <div id="my-portal"></div> <!--This guy here-->
    </body>
    </html>

    ```

    components/Modal.js
    ```
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';

    class Modal extends Component {
        render() {
            ReactDOM.createPortal(
                this.props.children,
                document.getElementById('my-portal')
            )
        }
    }
    ```

    App.js
    ```
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';

    import StudentForm from './components/StudentForm';

    class App extends Components {
        componentDidCatch() {
            this.setState({
                hasError: true
            });
        }

        render() {
            if (this.state.hasError) {
                return <h1>Oh no! Something went wrong</h1>;
            }

            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                    <StudentForm/>

                    <Modal>
                        <div className="modal">
                            This is the Modal window
                        </div>
                    </Modal>
                </div>
            );
        }
    }

    export default App;
    ```