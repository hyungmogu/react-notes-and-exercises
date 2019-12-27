# Lesson 04 - Resetting the Stopwatch

<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/6856382/71510613-4775a180-2844-11ea-994b-b160f3b21a1b.png">
</div>

- **Note:** prefix `handle` is attached to all methods in component
    - this is to distinguish from methods passed down by props

- this lesson goes over the logics of reset button in stopwatch

    Stopwatch.js
    ```
    import React, { Component } from 'react';

    class Stopwatch extends Component {

        state = {
            isRunning: false,
            elapsedTime: 0,
            previousTime: 0
        }

        componentDidMount() {
            console.log('The stopwatch mounted');
            this.intervalId = setInterval( () => { this.tick() , 100 }) // this means to run tick() every 100 milliseconds
        }

        tick = () => {
            console.log('Ticking...');
            if (this.state.isRunning) {
                let now = Date.now();

                this.setState(prevState => {
                    previousTime: now,
                    elapsedTime: this.state.elapsedTime + (now - this.state.previousTime) // this is to ensure that elapsed time is in interval of 100 ms exact
                });
            }
        }

        handleStopwatch = () => {
            this.setState({
                isRunning: !this.state.isRunning
            })

            // this code runs in transition from stopped state to running state
            if (!this.state.isRunning) {
                console.log('Starting ...');
                this.setState({ previousTime: Date.now() });
            }
        }

        handleReset = () => {
            this.setState({ elapsedTime: 0 });
        }

        render() {
            return (
                let seconds = Math.floor(this.state.elapsedTime / 1000);

                <div className="stopwatch">
                    <h2>Stopwatch</h2>
                    <span className="stopwatch-time">{ seconds }</span>
                    <button
                        onClick={this.handleStopwatch}
                    >{ this.state.isRunning ? 'Start' : 'End' }</button>
                    <button
                        onClick={this.handleReset}
                    >Reset</button>
                </div>
            );
        }
    }


    ```