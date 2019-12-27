# Lesson 03 - Update the Stopwatch State with componentDidMount()


## Component Lifecycle
- There are three primary component lifecycles
    1. it's mounted onto the DOM
    2. it's updated with changes in data
    3. it's unmounted from DOM

- there are method for each phase in cycle

    i.e. componentDidMount() - runs when component is mounted to view

-------------

    Example

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

        handleStopatch = () => {
            this.setState({
                isRunning: !this.state.isRunning
            })

            // this code runs in transition from stopped state to running state
            if (!this.state.isRunning) {
                console.log('Starting ...');
                this.setState({ previousTime: Date.now() });
            }

        }

    }


    ```