# Lesson 02 - Stopwatch State


<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71505300-7d5d5a80-2831-11ea-9d08-05af28020609.png">
</div>

- this lecture goes over initializing Stopwatch component
    - `?` and `:` in `{this.state.isRunning ? 'Start' : 'End'}` means if this.state.isRunning is true, then return 'Start' else return 'End'

    Stopwatch.js
    ```
    import React, { Component } from 'react';

    class Stopwatch extends Component {
        state = {
            isRunning: false
        }

        handleStopwatch = () => {
            this.setState(prevState => {
                state: !prevState.isRunning
            })
        }

        render() {
            return (
                <div className="stopwatch">
                    <h2>Stopwatch</h2>
                    <span className="stopwatch-time">0</span>
                    <button
                        onClick={this.handleStopwatch}
                    >{ this.state.isRunning ? 'Start' : 'End' }</button>
                    <button>Reset</button>
                </div>
            );
        }
    }


    export default Stopwatch;
    ```