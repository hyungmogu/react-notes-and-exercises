# Lesson 02 - Take Control of Errors with componentDidCatch()


- before app crashed entirely if error occured.

    <div style="text-align: center;">
        <img src="https://user-images.githubusercontent.com/6856382/71741444-2ac90300-2e1c-11ea-85ec-99d2d19bc7e8.png">
    </div>

- facebook has developed and released `componentDidCatch()` feature that allows app to continue to run despite of errors

    Example
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
                </div>
            );
        }
    }

    export default App;
    ```
