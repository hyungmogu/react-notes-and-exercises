# Lesson 03 - Catching Errors with Error Boundaries


- this lecture goes over creating reusable Error Info component
- `componentDidCatch` returns 2 values: `error` and `info`
    - with these two, developers can take control over the error it occurs

    Example

    component/ErrorBoundary.js
    ```
    import React, { Component } from 'react';

    export default class ErrorBoundary extends Component {
        state = {
            hasError: true
        }

        componentDidCatch(error , info) {
            this.setState({
                hasError: true
            })
        }

        render() {
            if (this.state.hasError) {
                return <h2>Oh no! Something went wrong</h2>;
            }

            return this.props.children;
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

                    <ErrorBoundary> // component that returns error if any goes wrong
                        <StudentForm/>
                    </ErrorBoundary>
                </div>
            );
        }
    }

    export default App;
    ```